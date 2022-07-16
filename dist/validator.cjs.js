var c=Object.defineProperty;var m=o=>c(o,"__esModule",{value:!0});var b=(o,e)=>{m(o);for(var r in e)c(o,r,{get:e[r],enumerable:!0})};b(exports,{default:()=>p});function u(o){o.directive("form-validator",(e,{modifiers:r},{})=>{let l=e.getAttribute("x-form-validator-img"),i=r[0]||15,s=360/i,a=()=>Math.floor(Math.random()*s)+1,n=a();for(;n%s==0;)n=a();let f=[...e.closest("form").querySelectorAll("button")].filter(t=>t.attributes.type!=="button"),v=()=>{f.forEach(t=>t.setAttribute("disabled",!0))},d=()=>{f.forEach(t=>t.removeAttribute("disabled"))};v(),window.addEventListener("fv-reset-form-buttons",t=>{t.detail%s==0?d():v()}),e.innerHTML=`
      <style>
        ._fvImg { transform: rotate(var(--fv-rotate)) }
      </style>

      <div x-data="{ _fvPos: ${n} }" class="_fvWrapper">
        <img src="${l}" class="_fvImg" :style="{ '--fv-rotate': _fvPos * ${i} + 'deg' }" />

        <div class="_fvActions">
          <button type="button" class="_fvPrev" x-on:click="_fvPos--; $dispatch('fv-reset-form-buttons', _fvPos)">Prev</button>

          <button type="button" class="_fvNext" x-on:click="_fvPos++; $dispatch('fv-reset-form-buttons', _fvPos)">Next</button>
        </div>
      </div>
    `})}var p=u;0&&(module.exports={});
