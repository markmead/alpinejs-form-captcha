function f(c){c.directive("form-captcha",(r,{modifiers:v},{})=>{let u=r.getAttribute("x-form-captcha-img"),s=v[0]||15,e=360/s,n=()=>Math.floor(Math.random()*e)+1,o=n();for(;o%e===0||o===1||o===e-1;)o=n();let a=[...r.closest("form").querySelectorAll("button")].filter(t=>t.attributes.type!=="button"),i=()=>{a.forEach(t=>t.setAttribute("disabled",!0))},l=()=>{a.forEach(t=>t.removeAttribute("disabled"))};i(),window.addEventListener("fv-reset-form-buttons",t=>{t.detail%e===0?l():i()}),r.innerHTML=`
      <style>
        .fvImg {
          pointer-events: none;
          transform: rotate(var(--fv-rotate));
        }
      </style>

      <div x-data="{ fvPos: ${o} }" class="fvWrapper">
        <img src="${u}" class="fvImg" :style="{ '--fv-rotate': fvPos * ${s} + 'deg' }" />

        <div class="fvActions">
          <button type="button" class="fvPrev" x-on:click="fvPos--; $dispatch('fv-reset-form-buttons', fvPos)">Prev</button>

          <button type="button" class="fvNext" x-on:click="fvPos++; $dispatch('fv-reset-form-buttons', fvPos)">Next</button>
        </div>
      </div>
    `})}var p=f;export{p as default};
