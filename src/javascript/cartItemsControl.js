const cartItems = [
  {
    id: 1,
    name: "破壞補丁修身牛仔褲",
    style: "pants",
    number: 1,
    price: 3999
  },
  {
    id: 2,
    name: "刷色直筒牛仔褲",
    style: "pants",
    number: 1,
    price: 1299
  }
]

const cartItemButtons = document.querySelectorAll('.content__cart-item--info--buttons')
const totalPrice = document.querySelector('.content__cart-total').lastElementChild

function countPrice () {
  let price = 0
  for (let i = 0; i < cartItems.length; i++) {
    price += cartItems[i].number * cartItems[i].price
  }
  return new Intl.NumberFormat().format(price)
}

function cartItemButtonControl (e) {
  const id = e.target.closest('.content__cart-item--info--container').dataset.id
  const target = e.target
  const numbers = document.querySelectorAll('.content__cart-item--info--number')
  if (target.classList.contains('plus')) {
    cartItems[id - 1].number += 1
    numbers[id - 1].innerHTML = cartItems[id - 1].number
  } else if (target.classList.contains('minus')) {
    if (cartItems[id - 1].number === 0) { return }
    cartItems[id - 1].number -= 1
    numbers[id - 1].innerHTML = cartItems[id - 1].number
  }
  totalPrice.innerHTML = `$${countPrice()}`
}

for (let i = 0; i < cartItemButtons.length; i++) {
  cartItemButtons[i].addEventListener('click', cartItemButtonControl)
}