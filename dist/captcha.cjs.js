var v=Object.defineProperty;var m=o=>v(o,"__esModule",{value:!0});var b=(o,e)=>{m(o);for(var n in e)v(o,n,{get:e[n],enumerable:!0})};b(exports,{default:()=>p});function u(o){o.directive("form-captcha",(e,{modifiers:n},{})=>{let l=e.getAttribute("x-form-captcha-img"),i=n[0]||15,r=360/i,a=()=>Math.floor(Math.random()*r)+1,s=a();for(;s%r==0||s===1||s===r-1;)console.log(s,r),s=a();let c=[...e.closest("form").querySelectorAll("button")].filter(t=>t.attributes.type!=="button"),f=()=>{c.forEach(t=>t.setAttribute("disabled",!0))},d=()=>{c.forEach(t=>t.removeAttribute("disabled"))};f(),window.addEventListener("fv-reset-form-buttons",t=>{t.detail%r==0?d():f()}),e.innerHTML=`
      <style>
        ._fvImg {
          pointer-events: none;
          transform: rotate(var(--fv-rotate));
        }
      </style>

      <div x-data="{ _fvPos: ${s} }" class="_fvWrapper">
        <img src="${l}" class="_fvImg" :style="{ '--fv-rotate': _fvPos * ${i} + 'deg' }" />

        <div class="_fvActions">
          <button type="button" class="_fvPrev" x-on:click="_fvPos--; $dispatch('fv-reset-form-buttons', _fvPos)">Prev</button>

          <button type="button" class="_fvNext" x-on:click="_fvPos++; $dispatch('fv-reset-form-buttons', _fvPos)">Next</button>
        </div>
      </div>
    `})}var p=u;0&&(module.exports={});
