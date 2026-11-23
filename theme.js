(function(){
  const root=document.documentElement;
  let saved=null;
  try{saved=localStorage.getItem('informatyka-theme')}catch(e){}
  const systemDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
  function apply(theme){root.dataset.theme=theme;const b=document.getElementById('themeToggle');if(b){const dark=theme==='dark';b.innerHTML='<span aria-hidden="true">'+(dark?'☀':'☾')+'</span>';b.setAttribute('aria-label',dark?'Увімкнути світлу тему':'Увімкнути темну тему');b.title=dark?'Світла тема':'Темна тема';}}
  apply(saved||(systemDark?'dark':'light'));
  document.addEventListener('DOMContentLoaded',()=>{const b=document.getElementById('themeToggle');if(b)b.addEventListener('click',()=>{const next=root.dataset.theme==='dark'?'light':'dark';apply(next);try{localStorage.setItem('informatyka-theme',next)}catch(e){}});});
})();