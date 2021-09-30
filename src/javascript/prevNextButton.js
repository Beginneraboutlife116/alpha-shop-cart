const btn = document.querySelector(".btn")
const forms = document.querySelectorAll('.content__form-part')
const btnPrev = document.querySelector('.btn__prev')
const btnNext = document.querySelector('.btn__next')

let formPart = 0

function buttonClickControlForm(e) {
  e.preventDefault()
  const target = e.target.closest('button')
  let presentForm = formPart
  
  if (target.innerHTML === "確認下單") { return }
  if (target.classList.contains('btn__next')) {
    formPart += 1
    toggleDisplayNone(presentForm, formPart)
    btnPrev.classList.remove('disabled')
    modifyBtn()
  } else if (target.classList.contains('btn__prev')) {
    formPart -= 1
    toggleDisplayNone(presentForm, formPart)
    modifyBtn()
    btnNext.innerHTML = `
      <span>下一步</span>
      <div class="white-arrow"></div>
    `
  }
}

function toggleDisplayNone (presentNum, futureNum) {
  forms[presentNum].classList.toggle('d-none')
  forms[futureNum].classList.toggle('d-none')
}

function modifyBtn () {
  if (formPart === 0) {
    return btnPrev.classList.add('disabled')
  }
  if (formPart === 2) {
    return btnNext.innerHTML = "確認下單"
  }
}

btn.addEventListener('click', buttonClickControlForm)