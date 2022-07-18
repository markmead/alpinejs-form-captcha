export default function (Alpine) {
  Alpine.directive('form-captcha', (el, { modifiers }, {}) => {
    const imgSrc = el.getAttribute('x-form-captcha-img')

    const rotateAmount = modifiers[0] || 15

    const rotationSteps = 360 / rotateAmount

    const getStartingPosition = () =>
      Math.floor(Math.random() * rotationSteps) + 1

    let startingPosition = getStartingPosition()

    while (startingPosition % rotationSteps === 0) {
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
        ._fvImg {
          pointer-events: none;
          transform: rotate(var(--fv-rotate));
        }
      </style>

      <div x-data="{ _fvPos: ${startingPosition} }" class="_fvWrapper">
        <img src="${imgSrc}" class="_fvImg" :style="{ '--fv-rotate': _fvPos * ${rotateAmount} + 'deg' }" />

        <div class="_fvActions">
          <button type="button" class="_fvPrev" x-on:click="_fvPos--; $dispatch('fv-reset-form-buttons', _fvPos)">Prev</button>

          <button type="button" class="_fvNext" x-on:click="_fvPos++; $dispatch('fv-reset-form-buttons', _fvPos)">Next</button>
        </div>
      </div>
    `
  })
}
