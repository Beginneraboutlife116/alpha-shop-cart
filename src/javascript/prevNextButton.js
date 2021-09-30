const btn = document.querySelector(".btn")
const forms = document.querySelectorAll('.content__form-part')
const btnPrev = document.querySelector('.btn__prev')
const btnNext = document.querySelector('.btn__next')
const steps = document.querySelectorAll('.content__stepper-step')

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
    btnPrev.classList.remove('disabled')
    modifyBtn()
  } else if (target.classList.contains('btn__prev')) {
    stepCount -= 1
    toggleFormsDisplay(presentStepCount, stepCount)
    controlStepsStyle(presentStepCount, stepCount)
    modifyBtn()
    btnNext.innerHTML = `
      <span>下一步</span>
      <div class="white-arrow"></div>
    `
  }
}

function toggleFormsDisplay (presentNum, futureNum) {
  forms[presentNum].classList.toggle('d-none')
  forms[futureNum].classList.toggle('d-none')
}

function controlStepsStyle (presentNum, futureNum) {
  if (presentNum < futureNum) {
    steps[presentNum].classList.remove('active')
    steps[presentNum].classList.add('finished')
    steps[futureNum].classList.add('active')
  } else {
    steps[presentNum].classList.remove('active')
    steps[futureNum].classList.remove('finished')
    steps[futureNum].classList.add('active')
  }
}

function modifyBtn () {
  if (stepCount === 0) {
    return btnPrev.classList.add('disabled')
  }
  if (stepCount === 2) {
    return btnNext.innerHTML = "確認下單"
  }
}

btn.addEventListener('click', buttonClickControlForm)