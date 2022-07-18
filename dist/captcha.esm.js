function c(f){f.directive("form-captcha",(s,{modifiers:v},{})=>{let u=s.getAttribute("x-form-captcha-img"),r=v[0]||15,e=360/r,n=()=>Math.floor(Math.random()*e)+1,o=n();for(;o%e==0||o===1||o===e-1;)o=n();let i=[...s.closest("form").querySelectorAll("button")].filter(t=>t.attributes.type!=="button"),a=()=>{i.forEach(t=>t.setAttribute("disabled",!0))},l=()=>{i.forEach(t=>t.removeAttribute("disabled"))};a(),window.addEventListener("fv-reset-form-buttons",t=>{t.detail%e==0?l():a()}),s.innerHTML=`
      <style>
        .fvImg {
          pointer-events: none;
          transform: rotate(var(--fv-rotate));
        }
      </style>

      <div x-data="{ fvPos: ${o} }" class="fvWrapper">
        <img src="${u}" class="fvImg" :style="{ '--fv-rotate': fvPos * ${r} + 'deg' }" />

        <div class="fvActions">
          <button type="button" class="fvPrev" x-on:click="fvPos--; $dispatch('fv-reset-form-buttons', fvPos)">Prev</button>

          <button type="button" class="fvNext" x-on:click="fvPos++; $dispatch('fv-reset-form-buttons', fvPos)">Next</button>
        </div>
      </div>
    `})}var p=c;export{p as default};
