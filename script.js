const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
// Доступне посилання для переходу одразу до основного вмісту.
if(!document.querySelector('.skipLink')){const skip=document.createElement('a');skip.className='skipLink';skip.href='#mainContent';skip.textContent='Перейти до основного вмісту';document.body.prepend(skip);}
const main=document.querySelector('main');if(main&&!main.id)main.id='mainContent';
// Хлібні крихти на внутрішніх сторінках допомагають не загубитися в структурі сайту.
const pageHero=document.querySelector('.pageHero');
const isHome=/\/(index\.html)?$/.test(location.pathname);
if(pageHero&&!isHome){const wrap=pageHero.querySelector('.wrap');const heading=pageHero.querySelector('h1');if(wrap&&heading&&!wrap.querySelector('.breadcrumbs')){const crumbs=document.createElement('div');crumbs.className='breadcrumbs';const home=document.createElement('a');home.href='index.html';home.textContent='Головна';const sep=document.createElement('span');sep.className='crumbSep';sep.textContent='›';const current=document.createElement('span');current.setAttribute('aria-current','page');current.textContent=heading.textContent.trim().replace(/\s+/g,' ');crumbs.append(home,sep,current);wrap.insertBefore(crumbs,wrap.firstChild);}}

menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.setAttribute('aria-label',open?'Закрити меню':'Відкрити меню');menuBtn.textContent=open?'×':'☰'});
document.querySelectorAll('.drop>button').forEach(b=>{b.setAttribute('aria-expanded','false');b.addEventListener('click',()=>{const open=b.parentElement.classList.toggle('open');b.setAttribute('aria-expanded',String(open));});});
nav?.querySelectorAll('a').forEach(a=>{const url=new URL(a.href,location.href);if(url.pathname===location.pathname&&!url.hash){a.setAttribute('aria-current','page');a.classList.add('currentPage');}a.addEventListener('click',()=>{nav.classList.remove('open');if(menuBtn){menuBtn.textContent='☰';menuBtn.setAttribute('aria-expanded','false');menuBtn.setAttribute('aria-label','Відкрити меню');}})});
const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
document.getElementById('feedback')?.addEventListener('submit',e=>{e.preventDefault();const f=e.currentTarget;const sub=encodeURIComponent('Повідомлення з освітнього порталу');const body=encodeURIComponent(`Ім’я: ${f.elements.name.value}\nEmail: ${f.elements.email.value}\n\nПовідомлення:\n${f.elements.message.value}`);document.getElementById('formNote').textContent='Відкриваємо поштовий застосунок. Якщо він не відкрився, напиши на artembabak@gmail.com.';location.href=`mailto:artembabak@gmail.com?subject=${sub}&body=${body}`});
