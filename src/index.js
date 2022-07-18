export default function (Alpine) {
  Alpine.directive('form-captcha', (el, { modifiers }, {}) => {
    const imgSrc = el.getAttribute('x-form-captcha-img')

    const rotateAmount = modifiers[0] || 15

    const rotationSteps = 360 / rotateAmount

    const getStartingPosition = () =>
      Math.floor(Math.random() * rotationSteps) + 1

    let startingPosition = getStartingPosition()

    while (
      startingPosition % rotationSteps === 0 ||
      startingPosition === 1 ||
      startingPosition === rotationSteps - 1
    ) {
      startingPosition = getStartingPosition()
    }

    const parentForm = el.closest('form')

    const formSubmitButtons = [...parentForm.querySelectorAll('button')].filter(
      (formButton) => {
        return formButton.attributes.type !== 'button'
      }
    )

    const disableSubmitButtons = () => {
      formSubmitButtons.forEach((submitButton) =>
        submitButton.setAttribute('disabled', true)
      )
    }

    const enableSubmitButtons = () => {
      formSubmitButtons.forEach((submitButton) =>
        submitButton.removeAttribute('disabled')
      )
    }

    disableSubmitButtons()

    window.addEventListener('fv-reset-form-buttons', (alpineEvent) => {
      alpineEvent.detail % rotationSteps === 0
        ? enableSubmitButtons()
        : disableSubmitButtons()
    })

    el.innerHTML = `
      <style>
        .fvImg {
          pointer-events: none;
          transform: rotate(var(--fv-rotate));
        }
      </style>

      <div x-data="{ fvPos: ${startingPosition} }" class="fvWrapper">
        <img src="${imgSrc}" class="fvImg" :style="{ '--fv-rotate': fvPos * ${rotateAmount} + 'deg' }" />

        <div class="fvActions">
          <button type="button" class="fvPrev" x-on:click="fvPos--; $dispatch('fv-reset-form-buttons', fvPos)">Prev</button>

          <button type="button" class="fvNext" x-on:click="fvPos++; $dispatch('fv-reset-form-buttons', fvPos)">Next</button>
        </div>
      </div>
    `
  })
}
