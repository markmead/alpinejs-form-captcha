var v=Object.defineProperty;var m=o=>v(o,"__esModule",{value:!0});var b=(o,e)=>{m(o);for(var s in e)v(o,s,{get:e[s],enumerable:!0})};b(exports,{default:()=>p});function u(o){o.directive("form-captcha",(e,{modifiers:s},{})=>{let l=e.getAttribute("x-form-captcha-img"),i=s[0]||15,r=360/i,a=()=>Math.floor(Math.random()*r)+1,n=a();for(;n%r==0;)n=a();let c=[...e.closest("form").querySelectorAll("button")].filter(t=>t.attributes.type!=="button"),f=()=>{c.forEach(t=>t.setAttribute("disabled",!0))},d=()=>{c.forEach(t=>t.removeAttribute("disabled"))};f(),window.addEventListener("fv-reset-form-buttons",t=>{t.detail%r==0?d():f()}),e.innerHTML=`
      <style>
        ._fvImg {
          pointer-events: none;
          transform: rotate(var(--fv-rotate));
        }
      </style>

      <div x-data="{ _fvPos: ${n} }" class="_fvWrapper">
        <img src="${l}" class="_fvImg" :style="{ '--fv-rotate': _fvPos * ${i} + 'deg' }" />

        <div class="_fvActions">
          <button type="button" class="_fvPrev" x-on:click="_fvPos--; $dispatch('fv-reset-form-buttons', _fvPos)">Prev</button>

          <button type="button" class="_fvNext" x-on:click="_fvPos++; $dispatch('fv-reset-form-buttons', _fvPos)">Next</button>
        </div>
      </div>
    `})}var p=u;0&&(module.exports={});
