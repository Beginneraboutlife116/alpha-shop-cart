const btn = document.querySelector(".btn")
const forms = document.querySelectorAll('.form__part')
const btnPrev = document.querySelector('.btn__prev')
const btnNext = document.querySelector('.btn__next')
const steps = document.querySelectorAll('.stepper__step')

let stepCount = 0

function buttonClickControlForm(e) {
  e.preventDefault()
  const target = e.target.closest('button')
  let presentStepCount = stepCount
  
  if (target.innerHTML === "確認下單") { return }
  if (target.classList.contains('btn__next')) {
    stepCount += 1
    toggleFormsDisplay(presentStepCount, stepCount)
    controlStepsStyle(presentStepCount, stepCount)
    btnPrev.classList.remove('btn__prev--disabled')
    modifyBtn()
  } else if (target.classList.contains('btn__prev')) {
    stepCount -= 1
    toggleFormsDisplay(presentStepCount, stepCount)
    controlStepsStyle(presentStepCount, stepCount)
    modifyBtn()
    btnNext.innerHTML = `
      <span class="btn__next-info">下一步</span>
      <div class="btn__next-icon"></div>
    `
  }
}

function toggleFormsDisplay (presentNum, futureNum) {
  forms[presentNum].classList.toggle('d-none')
  forms[futureNum].classList.toggle('d-none')
}

function controlStepsStyle (presentNum, futureNum) {
  if (presentNum < futureNum) {
    steps[presentNum].classList.remove('stepper__step--active')
    steps[presentNum].classList.add('stepper__step--finished')
    steps[futureNum].classList.add('stepper__step--active')
  } else {
    steps[presentNum].classList.remove('stepper__step--active')
    steps[futureNum].classList.remove('stepper__step--finished')
    steps[futureNum].classList.add('stepper__step--active')
  }
}

function modifyBtn () {
  if (stepCount === 0) {
    return btnPrev.classList.add('btn__prev--disabled')
  }
  if (stepCount === 2) {
    return btnNext.innerHTML = "確認下單"
  }
}

btn.addEventListener('click', buttonClickControlForm)