function f(c){c.directive("form-validator",(e,{modifiers:v},{})=>{let l=e.getAttribute("x-form-validator-img"),s=v[0]||15,r=360/s,n=()=>Math.floor(Math.random()*r)+1,o=n();for(;o%r==0;)console.log(o,"Nope"),o=n();let i=[...e.closest("form").querySelectorAll("button")].filter(t=>t.attributes.type!=="button"),a=()=>{i.forEach(t=>t.setAttribute("disabled",!0))},u=()=>{i.forEach(t=>t.removeAttribute("disabled"))};a(),window.addEventListener("fv-reset-form-buttons",t=>{t.detail%r==0?u():a()}),e.innerHTML=`
      <style>
        ._fvImg { transform: rotate(var(--fv-rotate)) }
      </style>

      <div x-data="{ _fvPos: ${o} }" class="_fvWrapper">
        <img src="${l}" class="_fvImg" :style="{ '--fv-rotate': _fvPos * ${s} + 'deg' }" />

        <div class="_fvActions">
          <button type="button" class="_fvPrev" x-on:click="_fvPos--; $dispatch('fv-reset-form-buttons', _fvPos)">Prev</button>

          <button type="button" class="_fvNext" x-on:click="_fvPos++; $dispatch('fv-reset-form-buttons', _fvPos)">Next</button>
        </div>
      </div>
    `})}var p=f;export{p as default};
