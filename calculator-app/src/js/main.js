function initCalc() {
  container = document.querySelector('.container')
  if (localStorage.getItem('theme')) {
    container.dataset.theme = localStorage.getItem('theme')
  }

  calcOutput = document.querySelector('.calc__output')
  calcButtons = document.querySelectorAll('.calc__button')

  calcButtons.forEach(calcButton => {
    calcButton.addEventListener('click', () => {
      if (calcButton.classList.contains('number') || calcButton.classList.contains('operator')) {
        calcOutput.textContent += calcButton.textContent
      }
      if (calcButton.classList.contains('dot')) {
        calcOutput.textContent += ','
      }
      if (calcButton.classList.contains('delete')) {
        if (calcOutput.textContent.length > 0) {
          calcOutputContent = calcOutput.textContent
          calcOutputContent = calcOutputContent.substring(0, calcOutputContent.length - 1)
          calcOutput.textContent = calcOutputContent
        }      
      } 
      if (calcButton.classList.contains('reset')) {
        calcOutput.textContent = ''
      }
      if (calcButton.classList.contains('equal')) {
        if (calcOutput.textContent.length > 0) {
          calcOutputContent = calcOutput.textContent
          calcOutputContent = calcOutputContent.replace('÷', '/')
          calcOutputContent = calcOutputContent.replace(',', '.')
          result = eval(calcOutputContent)
          result = result.toString()
          calcOutput.textContent = result.replace('.', ',')
        } 
      }
    }) 
  })
}

function initThemeSwitcher() {
  themeSwitcher = document.querySelector('.calc__theme__switcher')

  themeSwitcher.addEventListener('click', () => {
    dataTheme = container.dataset.theme
    switch (dataTheme) {
      case 'one':
        container.dataset.theme = 'two'
        localStorage.setItem('theme', 'two')
        break
      case 'two':
        container.dataset.theme = 'three'
        localStorage.setItem('theme', 'three')
        break
      case 'three':
        container.dataset.theme = 'one'
        localStorage.setItem('theme', 'one')
        break
    }
  })
}

initCalc()
initThemeSwitcher()