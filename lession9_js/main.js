/*
Bài 1
Viết một chương trình nhập lương nhân viên, tính thuế thu nhập và lương ròng
 (số tiền lương thực sự mà nhân viên đó nhận được). 
 Với các thông số giả sử như sau (không theo luật lương, 
 chỉ là con số giả sử để dễ tính toán):
•	30% thuế thu nhập nếu lương là 15 triệu.
•	20% thuế thu nhập nếu lương từ 7 đến 15 triệu.
•	10% thuế thu nhập nếu lương dưới 7 triệu.
 */
const salary = (s) => {
  let t 
  if (s > 15*Math.pow(10,6)) {
    t = 0.3
  }
  else if (s >= 7*Math.pow(10,6) && s <= 15*Math.pow(10,6)) {
    t = 0.2
  }
  else if (s > 0 && s < 7*Math.pow(10,6)) {
    t = 0.1
  }
  else {
    return `luong nhap sai`
  }
  return `thue thu nhap(${t*100}%):${t * s} \nluong rong:${s - t * s}`
}
/*
Bài 2
Viết chương trình nhập tuổi và in ra kết quả nếu tuổi học sinh đó 
không đủ điều kiện vào học lớp 10.
Biết tuổi vào lớp 10 của học sinh là 16.
 */
const condition = (age) => {
  if(age>=16)
  {
    return `du dieu kien vao lop 10`
  }
  else if(age>0 && age<16)
  {
    return `khong du dieu kien vao lop 10`
  }
  else
  {
    return `nhap sai tuoi`
  }
}

 /*
Bài 3
Viết chương trình nhập một số nguyên bất kỳ và 
in kết quả ra màn hình để thông báo cho người dùng biết số đó lớn hay nhỏ hơn 100.
 */
const checkNumber = (num) => {
  if(num>100) {
    return `so lon hon 100`
  }
  else if(num ==100) {
    return `so do la 100`
  }
  else {
    return `so nho hon 100`
  }
}
/*
Bài 4
Viết chương trình nhập vào 3 số nguyên và tìm số lớn nhất trong 3 số đó.
 */
const findMax = (a,b,c) => {
  let max=a
  if(b>max) {
    max = b
  }
  if(c>max) {
    max = c
  }
  return `so lon nhat la:\n ${max}` 
} 
/*
Bài 5
Viết chương trình xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra,
 điểm thi giữa kỳ, điểm thi cuối kỳ. Nếu:
•	Điểm trung bình >= 9.0 là hạng A.
•	Điểm trung bình >=7.0 và < 9.0 là hạng B
•	Điểm trung bình >=5.0 và < 7.0 là hạng C
•	Điểm trung bình <5.0 là hạng F

 */
const rating = (test,mid,final)=> {
  let avg =(test+mid+final)/3
  let rank =''
  if(avg>=9.0) {
    rank ='A'
  }
  else if(avg>=7.0 &&avg<9.0) {
    rank ='B'
  }
  else if(avg>=5.0&&avg<7.0) {
    rank ='C'
  }
  else {
    rank ='F'
  }
  return `xep hang hoc luc: ${rank}`
}
/*
Bài 6
Viết chương trình để tìm nghiệm của phương trình bậc hai ax2 + bx + c = 0. Biết rằng:
•	Nếu a và b cùng bằng 0 thì phương trình vô nghiệm.
•	Nếu a=0 thì phương trình có một nghiệm là (-c/b).
•	Nếu b2-4ac < 0, thì phương trình vô nghiệm.
•	Nếu không, phương trình có hai nghiệm, dùng công thức tính nghiệm để tính.
 */
const quadratic = (a,b,c) => {
  let delta=b*b-4*a*c
  if(delta<0) {
    return `phong trinh vo nghiem`
  }
  else if(delta==0) {
    return `phuong trinh co nghiem kep x=${-b/(2*a)}`
  }
  else {
    return `phuong trinh co 2 nghiem :\n
    x1=${-b + Math.sqrt(delta) / (2 * a)}
    x2=${-b - Math.sqrt(delta) / (2 * a)}`
  }
}
/*
Bài 7
Cửa hàng của bạn nhận gửi bán sản phẩm cho một công ty khác và hưởng hoa hồng,
 với mức hoa hồng theo doanh số bán như sau:
•	5% nếu tổng doanh số nhỏ hơn hoặc bằng 100 triệu.
•	10% nếu tổng doanh số nhỏ hơn hoặc bằng 300 triệu.
•	20 % nếu tổng doanh số là lớn hơn 300 triệu. 
Hãy viết chương trình Js để tính hoa hồng bạn sẽ nhận được dựa trên doanh số bán hàng.
 */
const commission = (revenue) => {
  let commiss
  if(revenue<=Math.pow(10,8)) {
    commiss=0.05
  }
  else if (revenue > Math.pow(10, 8) && revenue <= 3 * Math.pow(10, 8)) {
    commiss = 0.1
  } else {
    commiss = 0.2
  }
  return `tien hoa hong :
  ${revenue*commiss}`
}
/*
Bài 8
Viết chương trình để tính cước điện thoại bàn cho một hộ gia đình với các thông số như sau:
•	Phí thuê bao bắt buộc là 25 nghìn.
•	600 đồng cho mỗi phút gọi của 50 phút đầu tiên.
•	400 đồng cho mỗi phút gọi của 150 phút tiếp theo.
•	200 đồng cho bất kỳ phút gọi nào sau 200 phút đầu tiên.
 */
const telephoneCharges = (minute) => {
  let price
  if(minute<0)
  {
    return `nhap gia tri sai`
  }
  if(minute>0&&minute<=50) {
    price=600*minute
  }
  else if(minute>50&&minute<=200) {
    price=50*600+400*(minute-50)
  }
  else {
    price =50*600+150*400+200*(minute-200)
  }
  return `gia cuoc dien thoai:${price}`
   
}

console.log(telephoneCharges(50))
