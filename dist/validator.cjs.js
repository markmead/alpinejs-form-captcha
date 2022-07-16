var v=Object.defineProperty;var m=o=>v(o,"__esModule",{value:!0});var b=(o,e)=>{m(o);for(var r in e)v(o,r,{get:e[r],enumerable:!0})};b(exports,{default:()=>p});function l(o){o.directive("form-validator",(e,{modifiers:r},{})=>{let u=e.getAttribute("x-form-validator-img"),i=r[0]||15,n=360/i,a=()=>Math.floor(Math.random()*n)+1,s=a();for(;s%n==0;)console.log(s,"Nope"),s=a();let f=[...e.closest("form").querySelectorAll("button")].filter(t=>t.attributes.type!=="button"),c=()=>{f.forEach(t=>t.setAttribute("disabled",!0))},d=()=>{f.forEach(t=>t.removeAttribute("disabled"))};c(),window.addEventListener("fv-reset-form-buttons",t=>{t.detail%n==0?d():c()}),e.innerHTML=`
      <style>
        ._fvImg { transform: rotate(var(--fv-rotate)) }
      </style>

      <div x-data="{ _fvPos: ${s} }" class="_fvWrapper">
        <img src="${u}" class="_fvImg" :style="{ '--fv-rotate': _fvPos * ${i} + 'deg' }" />

        <div class="_fvActions">
          <button type="button" class="_fvPrev" x-on:click="_fvPos--; $dispatch('fv-reset-form-buttons', _fvPos)">Prev</button>

          <button type="button" class="_fvNext" x-on:click="_fvPos++; $dispatch('fv-reset-form-buttons', _fvPos)">Next</button>
        </div>
      </div>
    `})}var p=l;0&&(module.exports={});
