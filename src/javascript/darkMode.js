let darkMode = localStorage.getItem('darkMode')
const darkModeToggle = document.querySelector('#dark-mode-toggle')

if (darkMode === "on") {
  document.body.classList.add('darkmode')
}

function clickOnDarkModeToggle () {
  darkMode = localStorage.getItem('darkMode')
  if (darkMode !== 'on') {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkMode', 'on')
  } else {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkMode', 'off')
  }
}

darkModeToggle.addEventListener('click', clickOnDarkModeToggle)