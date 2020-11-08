const divChange = document.getElementById('divChange')
let flag = 0
const toggleBgColor = box => {
  const currentColor = divChange.style.background
  const nextColor = currentColor  === 'red' || !currentColor ? 'green' : 'red'
  box.style.background = nextColor
}

const toggleBgColor2 = event => {
  const currentColor = divChange.style.background
  const nextColor = currentColor  === 'red' || !currentColor ? 'green' : 'red'
  event.target.style.background = nextColor
}
divChange.addEventListener('click', () => {
  toggleBgColor(divChange)
})
