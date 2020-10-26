/*
Bài 1
In một bảng nhân của một số bất kỳ với các số từ 1 tới 10 và hiển thị kết quả
 */
const printMultiplicationTable = number => {
  if (number < 1 || number > 10) return
  for (let i = 1 ;i <= 10 ; i ++) {
      console.log(number + ' x ' + i + ' = ' + number * i)
  }
}

/*
Bài 2
Hàm nhận tham số là n (số nguyên dương),
 1 <= n <= 30 In các số chẵn từ 1 đến n Vd n = 6: in ra: 2 4 6
*/
const getEvenNumber = number => {
  if(number < 1 || number > 30) return
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
}

/* Bài 3
Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 Tính tổng từ 1 đến n
vd nhập vào 6: Tổng = 1 + 2 + 3 + 4 + 5 + 6 = 21
 */
const getSum = number => {
  let sum = 0
  if (number < 1 || number > 30) return
  for (let i = 1; i <= number; i++) {
    sum += i
  }
  return sum    
}

/* Bài 4
Hàm nhận tham số là n (số nguyên dương), 
1 <= n <= 30 In ra n! (giai thừa của n)
 */
const getFactorial = number => {
  let fact = 1
  if (number < 1 || number > 30) return
  for (let i = 1; i <= number; i++) {
    fact *= i
  }
  return fact
}

/* Bài 5
Hàm nhận vào 1 mảng đếm xem trong mảng có bao nhiêu số chẵn
Vd: param là [1, 2, 3, 6, 2, 9, 0] thì return 4 vì có 4 số chẵn
 */

const countEvenNumber = array => {
  let count = 0
  for (let i = 0; i < array.length ; i++) {
    if (array[i] % 2 === 0) {
      count += 1
    }
  }
  return count
}

/* Bài 6
Hàm nhận vào 1 mảng chứa các chữ cái bị trùng lặp ngẫu nhiên 
Tính toán và trả về 1 mảng đã xóa đi các chữ cái bị trùng lặp
Vd params:
['A', 'C', 'A', 'A', 'B', 'D', 'B']
Thì return:
return ['A', 'C', 'B', 'D']
 */
//const removeDuplicates  = array.filter((item, index) => array.indexOf(item) === index)
const removeDuplicates = array => {
  const newArray=[]
  for (let i = 0 ; i < array.length ; i++) {
    if (array.indexOf(array[i]) === i) {
      newArray.push(array[i])
    }
  }
  return newArray
}

/* 
Bài 7
Bạn cần phải tạo ra 1 object có đầy đủ các thuộc tính: name, score từ 2 array sau:
 */
const studentNames = [
  { id: 1, name: 'Nguyễn Thị Tèo' },
  { id: 2, name: 'Phạm Văn Bưởi' },
  { id: 3, name: 'Hoàng Văn Nam' },
  { id: 4, name: 'Vũ Ngọc Duy' },
  { id: 5, name: 'Nguyễn Minh Nhật' },
  { id: 6, name: 'Phí Duy Quân' },
  { id: 7, name: 'Trần Minh Minh' }
]
const studentScores = [
  { id: 1, score: 9.2 },
  { id: 2, score: 2.3 },
  { id: 3, score: 3.7 },
  { id: 4, score: 6.9 },
  { id: 5, score: 5.2 },
  { id: 6, score: 9.6 },
  { id: 7, score: 6.1 }
]
const createObjStudents = (studentNames,studentScores) => {
  for (let i = 0 ; i < studentNames.length ; i++) {
    for(let j = 0 ; j < studentScores.length ; j++) {
      if (studentNames[i].id === studentScores[i].id) {
        studentNames[i].score = studentScores[i].score
      }
    }
  }
  return studentNames
}
// Solution 2
const findStudentScore = (studentScores,id) => {
  for (let i = 0; i < studentScores.length ; i++) {
    const student = studentScores[i]
    if (student.id === id) {
      return student.score
    }
  }
  return 0
}
const validate = (studentNames, studentScores) => {
  return true
} 
const mergeStudents = (studentNames,studentScores) => {
  if (!validate(studentNames, studentScores)) return;
  studentNames.forEach(student => {
    student.score = findStudentScore(student.id)
  })
  return studentNames
}

/* 
Bài 8 Cho array dưới đây là danh sách các students
Hãy tìm sinh viên có điểm (score) thấp nhất và sinh viên có score cao nhất
 */
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
const findScoreMaxMin = array => {
  let max = array[0].score
  let min = array[0].score
  const scoreMaxMin = {}
  const theBest = []
  const theBad = []
  for (let i = 1; i < array.length; i++) {
    if(array[i].score > max) {
      max = array[i].score
    }
    if(array[i].score < min) {
      min = array[i].score
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i].score === max) {
      theBest.push(array[i])
    }
    if (array[i].score === min) {
      theBad.push(array[i])
    }
  }
  scoreMaxMin.theBest = theBest
  scoreMaxMin.theBad = theBad
  return scoreMaxMin
}
console.log(findScoreMaxMin(students))
