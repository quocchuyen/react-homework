const divChange = document.getElementById('divChange')
let flag = 0
const changeBg = divChange => {
  if (flag === 0) {
    divChange.style.background = 'green'
    flag = 1 
  }
  else if (flag === 1) {
    divChange.style.background = 'red'
    flag = 0
  }
}
divChange.addEventListener('click', () => {
  changeBg(divChange)
})
