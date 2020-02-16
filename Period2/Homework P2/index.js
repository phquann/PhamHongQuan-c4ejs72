//Bai3
//a 
//for (let i=0; i<7; i++) {
    //console.log(i);
//}
//b
// let n = Number(prompt("Nhập 1 số và bạn đẹp trai nhất quả đất"));
// for (let i = 0; i < n; i++) {
//   console.log(i);
// }
//c
// let n = Number(prompt("Nhập số nào lớn hơn 3 ý làm ơn"))
// for(let i =3 ; i< n ; i++) {
//   console.log(i);
// }
//d
// let n = Number(prompt("Nhập n"));
// let c = Number(prompt("Nhập c"));
// for (let i = c; i < n; i++) {
//   console.log(i);
// }
//e
// let n = Number(prompt("Nhập n"));
// let c = Number(prompt("Nhập c"));
// for (let i=c; i < n; i+=3) {
//      console.log(i);
//}
//f
// let n = Number(prompt("Nhập n"));
// let c = Number(prompt("Nhập c"));
// let s = Number(prompt("Nhập s"));
// for (let i=c; i < n; i+=s) {
//      console.log(i);
//}

//Bai4
// let n = Number(prompt("Điền số lẹ đi đừng để tao quạo"));
// let a = 1;
// for (let i = 1; i <= n; i++) {
//   a = a * i;
// }
// alert(`Giai thừa của ${n} là ${a}`);

//Bai5
// let age = Number(prompt("Bao tuổi rồi mà mò vào đây???"));
// if (age < 14) {
//   alert("Chưa đủ tuổi đâu em ơi đi học đi");
// } else {
//   alert("Ok em xin lỗi đại ca mời anh thưởng thức :(");
// }

//Bai6
// let x = Number(prompt("Nhập 1 số bất kì trong khoảng từ 0 đến 9 thui nha hihi"));
// if (x < 4.5) {
//   alert("Chưa đến một nửa của 9");
// } else {
//   alert("Hơn một nửa của 9 rùi nè");
// }

//Bai7
// let n = Number(prompt("Nhập 1 số vào đây"));
// let x = Number(prompt("Ok giờ nhập 1 số dương nhỏ hơn số ban nãy nghen"));
// if (x < n / 2) {
//   alert(`${x} nhỏ hơn 1 nửa của ${n}`);
// } else if (x > n / 2) {
//   alert(`${x} lớn hơn một nửa của ${n}`);
// }

//Bai8
// let n = Number(prompt("Nãy giờ nhập nhiều số quá, nhưng thôi cứ nhập đi hihi"));
// if (n % 2 === 0) {
//   alert(`${n} là số chẵn nè`);
// } else {
//   alert(`${n} là số lẻ nè`);
// }

//Bai9
// a
// for (let i = 0; i < 6; i++) {
//   if (i < 3) {
//     console.log("L");
//   } else {
//     console.log("H");
//   }
// }
// b
// let n = Number(prompt("Nhập số vào anh gì ơi"));
// for (let i = 0; i < n; i++) {
//   if (i < (n / 2) + 1) {
//     console.log("L");
//   } else {
//     console.log("H");
//   }
// }
// c
// for (let i = 0; i < 8; i++) {
//   if (i % 2 === 0) {
//     console.log(0);
//   } else console.log(1);
// }
// d
// let n = Number(prompt("Huhu nhập số vào đi mà :("));
// for (let i = 0; i < n; i++) {
//   if (i % 2 === 0) {
//     console.log(0);
//   } else console.log(1);
// }

//Bai10
// let kg = Number(prompt("Mày nặng bao nhiêu kí lô ?"))
// let cm = Number(prompt("Mày cao bao nhiu xăng ti mét ?"))
// let m = cm/100
// let BMI = kg / (m * m)
// alert(`Chỉ số BMI nè ông nội ${BMI}`);
// if(BMI <= 16){
//     console.log(BMI," Gầy thế ăn nhiều vào làm ơnn")
// }else if(BMI > 16 && BMI <= 18.5){
//     console.log(BMI," Hơi gầy đấy ăn kiêng à ?")
// }else if(BMI > 18.5 && BMI <= 25){
//     console.log(BMI," Ok có vẻ cân đối")
// }else if(BMI > 25 && BMI <= 30){
//     console.log(BMI," Thừa cân rồi đó bạn hiền")
// }else{
//     console.log(BMI," Làm ơn đi giảm ăn một chút hog chết đâu")
// }

//Bai11
//a. A square
// clear()
// let degrees = 360/4;
// for(i = 0; i < 4; i++){
//     fd(100)
//     rt(degrees)
// }

//b. A triangle
// clear()
// let degrees = 360/3;
// for(i = 0; i < 3; i++){
//     fd(100)
//     rt(degrees)
// }

//c. A pentagon
// clear()
// let degrees = 360/5;
// for(i = 0; i < 5; i++){
//     fd(100)
//     rt(degrees)
// }

//d. A hexagon
// clear()
// let degrees = 360/6;
// for(i = 0; i < 6; i++){
//     fd(100)
//     rt(degrees)
// }

//Bai12
// clear()
// let a = Number(prompt())
// let degrees = 360/a;
// for(i = 0; i < a; i++) {
//     fd(100)
//     rt(degrees)
// }

// let n = Number(prompt("Muốn bao nhiêu hình thì điền vào giùm???"));
// for (let i = 3; i < n + 3; i++) {
//   for (let j = 1; j <= i; j++) {
//     fd(100);
//     rt(360 / i);
//   }
// }