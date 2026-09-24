document.getElementById('themeBtn').addEventListener('click',function(){
  var r=document.documentElement,cur=r.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'),nx=cur==='dark'?'light':'dark';
  r.setAttribute('data-theme',nx);try{localStorage.setItem('gl-theme',nx)}catch(e){}
});
