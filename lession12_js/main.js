// Exercise 1
// solution 1
const isEqual = (lottery1, lottery2) => {
  let check = true
  for (let i = 0 ; i < lottery1.length ; i++ ) {
    lottery1[i] === lottery2[i] && lottery1.length === lottery2.length ? check = true : check = false 
  }
  return check
}
// solution 2
const isEqual2 = (lottery1, lottery2) => {
  return JSON.stringify(lottery1) === JSON.stringify(lottery2)
}

// Exercise 2
const flatten = data => data.join().split(',').map(value => Number(value))

// Exercise 3
const chunk = (arr, count) => {
  let newArr = []
  for (let i = 0 ; i < arr.length ; i += count) {
    newArr.push(arr.slice(i , i + count)) 
  }
  return newArr
}

// Exercise 4
const intersectionTwoArr = (firstArray, secondArray) => {
  let interArray = []
  for (let i = 0 ; i < firstArray.length ; i++) {
    if (secondArray.includes(firstArray[i])) {
      interArray.push(firstArray[i])
    }
  }
  return interArray
}

const intersectionMultiArr = arr => {
  for ( let i = 0 ; i < arr.length ; i++) {
    return  [...new Set(intersectionTwoArr(arr[i], arr[i + 1]))] 
  }
}

// Exercise 5
const checkDiscount = date => {
  const lastDayDiscount = Date.parse('October 30, 2020 12:30:32')
  return Date.parse(date) <= Date.parse(lastDayDiscount)
}
// Exercise 6
const checkEmail = email => {
  const regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  return regEx.test(email)
}

const checkUserName = userName => {
  const regEx =/^([a-z]){1}([a-z0-9]|_(?!_)){1,9}$/
  return regEx.test(userName)
}
