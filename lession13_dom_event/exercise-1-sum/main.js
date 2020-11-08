const numOne = document.getElementById('numOne')
const numTwo = document.getElementById('numTwo')
const btnGetSum = document.getElementById('getSum')
const result = document.getElementById('result')
btnGetSum.addEventListener('click', () => {
  result.innerHTML = `Kết quả : ${getSum(numOne.value, numTwo.value)}`
})
const getSum = (numOne, numTwo) => {
  return Number(numOne) + Number(numTwo)
}
