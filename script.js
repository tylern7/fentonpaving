const b=document.querySelector('.burger'),m=document.getElementById('menu');
b.addEventListener('click',()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu')});
m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{m.classList.remove('open');b.setAttribute('aria-expanded','false')}));
document.getElementById('yr').textContent=new Date().getFullYear();
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.sec h2,.card,.pillar,.gallery img,.review,.awards img,.quote').forEach(el=>{el.classList.add('reveal');io.observe(el)})}
const f=document.getElementById('quote'),n=f.querySelector('.form-note');
f.addEventListener('submit',async e=>{e.preventDefault();const d=new FormData(f);
 if(f.action.includes('YOUR_FORM_ID')){const body=[...d].filter(([k])=>k!=='_gotcha').map(([k,v])=>k+': '+v).join('\n');
  location.href='mailto:fentonpaving@outlook.com?subject='+encodeURIComponent('Quote request')+'&body='+encodeURIComponent(body);return}
 try{const r=await fetch(f.action,{method:'POST',body:d,headers:{Accept:'application/json'}});
  if(r.ok){f.reset();n.textContent='Thanks! We’ll be in touch shortly.'}else throw 0}
 catch{n.textContent='Something went wrong — please call 905-536-0056 or email fentonpaving@outlook.com.'}});
