const btn = document.querySelector(".btn")
const forms = document.querySelectorAll('.content__form-part')

let formPart = 0

function toggleDisplayNone (presentNum, futureNum) {
  forms[presentNum].classList.toggle('d-none')
  forms[futureNum].classList.toggle('d-none')
}

function disabledBtn () {
  
}

function buttonClickControlForm(e) {
  e.preventDefault()
  const target = e.target.closest('button')
  let presentForm = formPart
  const btnPrev = document.querySelector('.btn__prev')
  const btnNext = document.querySelector('.btn__next')
  // 目的：按按鈕後，可以切換step的順序與form的順序
  // 可能事後需要設定一些required進去html中
  // 1. 判斷按鈕是否為btn__next或指涉btn__prev
  //    1. 判斷是下一步按鈕時，要做到將目前該頁隱藏起來，而轉到下一頁去顯示，使用d-none的toggle方式
  if (target.innerHTML === "確認下單") { return } // 未來需要可以考慮接submit
  if (target.classList.contains('btn__next')) {
    formPart += 1
    toggleDisplayNone(presentForm, formPart)
    btnPrev.classList.remove('disabled')
    if (formPart === 2) {
      target.innerHTML = "確認下單"
    }
  } else if (target.classList.contains('btn__prev')) {
    formPart -= 1
    toggleDisplayNone(presentForm, formPart)
    if (formPart === 0) {
      btnPrev.classList.add('disabled')
    } else {
      btnNext.innerHTML = `
        <span>下一步</span>
        <div class="white-arrow"></div>
      `
    }
  }
}

btn.addEventListener('click', buttonClickControlForm)