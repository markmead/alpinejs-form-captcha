function c(f){f.directive("form-captcha",(s,{modifiers:v},{})=>{let u=s.getAttribute("x-form-captcha-img"),r=v[0]||15,e=360/r,n=()=>Math.floor(Math.random()*e)+1,o=n();for(;o%e==0||o===1||o===e-1;)console.log(o,e),o=n();let i=[...s.closest("form").querySelectorAll("button")].filter(t=>t.attributes.type!=="button"),a=()=>{i.forEach(t=>t.setAttribute("disabled",!0))},l=()=>{i.forEach(t=>t.removeAttribute("disabled"))};a(),window.addEventListener("fv-reset-form-buttons",t=>{t.detail%e==0?l():a()}),s.innerHTML=`
      <style>
        ._fvImg {
          pointer-events: none;
          transform: rotate(var(--fv-rotate));
        }
      </style>

      <div x-data="{ _fvPos: ${o} }" class="_fvWrapper">
        <img src="${u}" class="_fvImg" :style="{ '--fv-rotate': _fvPos * ${r} + 'deg' }" />

        <div class="_fvActions">
          <button type="button" class="_fvPrev" x-on:click="_fvPos--; $dispatch('fv-reset-form-buttons', _fvPos)">Prev</button>

          <button type="button" class="_fvNext" x-on:click="_fvPos++; $dispatch('fv-reset-form-buttons', _fvPos)">Next</button>
        </div>
      </div>
    `})}var p=c;export{p as default};
