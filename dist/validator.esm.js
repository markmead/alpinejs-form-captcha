function f(v){v.directive("form-validator",(o,{modifiers:c},{})=>{let u=o.getAttribute("x-form-validator-img"),s=c[0]||15,e=360/s,n=()=>Math.floor(Math.random()*e)+1,r=n();for(;r%e==0;)r=n();let i=[...o.closest("form").querySelectorAll("button")].filter(t=>t.attributes.type!=="button"),a=()=>{i.forEach(t=>t.setAttribute("disabled",!0))},l=()=>{i.forEach(t=>t.removeAttribute("disabled"))};a(),window.addEventListener("fv-reset-form-buttons",t=>{t.detail%e==0?l():a()}),o.innerHTML=`
      <style>
        ._fvImg { transform: rotate(var(--fv-rotate)) }
      </style>

      <div x-data="{ _fvPos: ${r} }" class="_fvWrapper">
        <img src="${u}" class="_fvImg" :style="{ '--fv-rotate': _fvPos * ${s} + 'deg' }" />

        <div class="_fvActions">
          <button type="button" class="_fvPrev" x-on:click="_fvPos--; $dispatch('fv-reset-form-buttons', _fvPos)">Prev</button>

          <button type="button" class="_fvNext" x-on:click="_fvPos++; $dispatch('fv-reset-form-buttons', _fvPos)">Next</button>
        </div>
      </div>
    `})}var p=f;export{p as default};