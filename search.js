(function(){
 const pages=[
  {title:'Головна',url:'index.html',desc:'Освітній портал, новини, оголошення, навчання та інформатика',keys:'портал головна технології цікавість оголошення'},
  {title:'Про вчителя',url:'about.html',desc:'Інформація про вчителя інформатики',keys:'вчитель про мене'},
  {title:'Навчальні матеріали 5–11 класів',url:'materials.html',desc:'Матеріали, теми, підручники та завдання для всіх класів',keys:'підручник урок тема матеріали навчання'},
  {title:'Інтерактивні тести',url:'tests.html',desc:'Перевір знання, відповіді та пояснення',keys:'тест перевірка знань алгоритм клавіатура безпека'},
  {title:'Для учнів',url:'students.html',desc:'Поради щодо навчання, перерв, домашніх робіт та комп’ютерного класу',keys:'учні навчання перерва домашнє завдання'},
  {title:'Безпека в інтернеті',url:'safety.html',desc:'Особисті дані, паролі, фішинг, цифровий слід і кібергігієна',keys:'безпека пароль фішинг кібербулінг приватність'},
  {title:'Проєкти учнів',url:'projects.html',desc:'Учнівські роботи, ідеї та творчі завдання',keys:'проєкт гра презентація сайт програмування'},
  {title:'Для батьків',url:'parents.html',desc:'Поради батькам, підтримка навчання та цифровий баланс',keys:'батьки родина підтримка навчання'},
  {title:'Олімпіади та контакти',url:'olympiads.html',desc:'Підготовка до олімпіад, алгоритми та контакти',keys:'олімпіада програмування контакти'},
  ...[5,6,7,8,9,10,11].map(n=>({title:n+' клас — уроки інформатики',url:'grade-'+n+'.html',desc:'Теорія, практичні роботи, домашні завдання та підручник для '+n+' класу',keys:'клас уроки теорія практика домашнє завдання підручник'}))
 ];
 const input=document.getElementById('siteSearch'),out=document.getElementById('searchResults');if(!input||!out)return;
 const norm=s=>s.toLocaleLowerCase('uk-UA').normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim();
 function render(){const q=norm(input.value);if(!q){out.hidden=true;out.innerHTML='';return;}const terms=q.split(/\s+/).filter(Boolean);const hits=pages.filter(p=>{const hay=norm(p.title+' '+p.desc+' '+p.keys);return terms.every(t=>hay.includes(t));}).slice(0,7);out.innerHTML='';if(!hits.length){const empty=document.createElement('p');empty.className='searchEmpty';empty.textContent='Нічого не знайдено. Спробуй інші ключові слова.';out.append(empty);}else hits.forEach(p=>{const a=document.createElement('a');a.href=p.url;a.className='searchHit';const strong=document.createElement('strong');strong.textContent=p.title;const small=document.createElement('small');small.textContent=p.desc;a.append(strong,small);out.append(a);});out.hidden=false;}
 input.addEventListener('input',render);input.addEventListener('keydown',e=>{if(e.key==='Escape'){input.value='';out.hidden=true;}if(e.key==='Enter'){const first=out.querySelector('a');if(first){e.preventDefault();location.href=first.href;}}});document.addEventListener('click',e=>{if(!e.target.closest('.searchWrap'))out.hidden=true;});
})();