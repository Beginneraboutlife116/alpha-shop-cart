let darkMode = localStorage.getItem('darkMode')
const darkModeToggle = document.querySelector('#darkModeToggle')

if (darkMode === "on") {
  document.body.classList.add('darkMode')
}

function clickOnDarkModeToggle () {
  darkMode = localStorage.getItem('darkMode')
  if (darkMode !== 'on') {
    document.body.classList.add('darkMode')
    localStorage.setItem('darkMode', 'on')
  } else {
    document.body.classList.remove('darkMode')
    localStorage.setItem('darkMode', 'off')
  }
}

darkModeToggle.addEventListener('click', clickOnDarkModeToggle)