const inputRadios = document.querySelectorAll('input[type="radio"]')
const deliveryWayPanel = document.querySelector('.content__form-part-delivery')

function deliveryWayChecked (e) {
  for (let i = 0; i < inputRadios.length; i++) {
    if (inputRadios[i].checked) {
      inputRadios[i].parentElement.classList.add('checked')
    } else {
      inputRadios[i].parentElement.classList.remove('checked')
    }
  }
}

deliveryWayPanel.addEventListener('change', deliveryWayChecked)