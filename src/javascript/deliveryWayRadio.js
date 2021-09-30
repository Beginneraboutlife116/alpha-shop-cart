const inputRadio = document.querySelectorAll('input[type="radio"]')
const deliveryWayPanel = document.querySelector('.content__form-part-delivery')

function deliveryWayChecked (e) {
  // console.log(e.target)
  const target = e.target.firstElementChild
  console.log(target)
  // console.log(target.firstElementChild)
}

deliveryWayPanel.addEventListener('click', deliveryWayChecked)