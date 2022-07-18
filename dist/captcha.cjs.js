var v=Object.defineProperty;var m=o=>v(o,"__esModule",{value:!0});var b=(o,e)=>{m(o);for(var r in e)v(o,r,{get:e[r],enumerable:!0})};b(exports,{default:()=>p});function u(o){o.directive("form-captcha",(e,{modifiers:r},{})=>{let l=e.getAttribute("x-form-captcha-img"),i=r[0]||15,n=360/i,a=()=>Math.floor(Math.random()*n)+1,s=a();for(;s%n==0||s===1||s===n-1;)s=a();let c=[...e.closest("form").querySelectorAll("button")].filter(t=>t.attributes.type!=="button"),f=()=>{c.forEach(t=>t.setAttribute("disabled",!0))},d=()=>{c.forEach(t=>t.removeAttribute("disabled"))};f(),window.addEventListener("fv-reset-form-buttons",t=>{t.detail%n==0?d():f()}),e.innerHTML=`
      <style>
        .fvImg {
          pointer-events: none;
          transform: rotate(var(--fv-rotate));
        }
      </style>

      <div x-data="{ fvPos: ${s} }" class="fvWrapper">
        <img src="${l}" class="fvImg" :style="{ '--fv-rotate': fvPos * ${i} + 'deg' }" />

        <div class="fvActions">
          <button type="button" class="fvPrev" x-on:click="fvPos--; $dispatch('fv-reset-form-buttons', fvPos)">Prev</button>

          <button type="button" class="fvNext" x-on:click="fvPos++; $dispatch('fv-reset-form-buttons', fvPos)">Next</button>
        </div>
      </div>
    `})}var p=u;0&&(module.exports={});
