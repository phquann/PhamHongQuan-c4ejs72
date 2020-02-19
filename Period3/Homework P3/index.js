// Bai1
// let a = 16;
// let b = 8;
// console.log(a, b);
// let temp = b;
// b = a;
// a = temp;
// console.log(a, b);

// Bai2
// const s = `Chao cac em xinh tuoi`;
// const a = s.split(" ");
// console.log(a);

// Bai3
// const a = [1, 6, 0, 8];
// console.log(...a);

// Bai4
// let brand = ['DirtyCoin', 'Clownz', 'Degree']
// let localBrand = ['DirtyCoin', 'Clownz', 'Degree']
// let a = prompt("Ok chào mày đến với Trần Dần shop, chọn thứ mày muốn đi(C,R,U,D)").toUpperCase()
// if(a == 'C' ){
//     let b = prompt("Muốn thêm cái gì nói mau ?")
//     localBrand.push(b) 
//     alert('Xong rồi đó rách việc quá')
//     console.log(localBrand)
// } else if(a == 'R'){
//     console.log('Sản phẩm đây nhìn cho kĩ vào:')
// }else if(a == 'U'){
//     let c = Number(prompt("Muốn sửa chỗ nào nhập lẹ lẹ lên")) - 1
//     if (Number.isNaN(c)) {
//         console.log("Nhập số vào có bị thieunang không ???")
//     }else{
//         if ( c >= localBrand.length) {
//             console.log('Có vài sản phẩm nhập số to để tế ai đấy ?')           
//         } else{
//         let d = prompt("Nhập cái sản phẩm mới vào đây")
//         localBrand[c] = d
//         alert('Ok xong việc rồi đó')
//         console.log(localBrand)
//         }
//     }
// } else if(a == 'D'){
//     let e = prompt("Xóa chỗ nào thì nhập vào") - 1
//     localBrand.splice(e, 1)
//     alert('Rồi ok xóa rồi đó')
//     console.log(localBrand)
// } else{
//     alert("Tao ghi rõ 4 lựa chọn rồi mày có bị đui không nhập cái clgt ???")
// }
// for(let i = 0;i < localBrand.length;i++){ 
//     console.log(i+1, localBrand[i])
// }

// Bai5
// const a = prompt("Nhập nhiều số và ngăn cách bởi dấu phẩy cho tao làm ơn").split(",");
// let total = 0;
// a.forEach((num) => {
//   total += Number(num);
// });
// console.log(total);

// Bai6
// const a = prompt("Nhập nhiều số và ngăn cách bởi dấu phẩy cho tao làm ơn").split(",");
// const newArray = a.map((num) => {
//   return Number(num);
// });
// const sốPéNhất = Math.min(...newArray);
// console.log(sốPéNhất);

// Bai7
// const arr = [1,6,0,8,2001];
// let num = Number(prompt("Anh muốn mua vé số tờ nào ??"));
// if (!arr.includes(num)) {
//   alert(`${num} không trúng rồi haha chia buồn nha`);
// } else {
//   alert(`${num} trúng giải số ${arr.indexOf(num)} nè anh ơi chia em với nha`);
// }

// Bai8
// 8.1
// const sizeOfSheep = [1, 6, 0, 8, 2001];
// console.log("Tên tao là Quân tiên tri vũ trụ, tao có một đàn cừu nè, size của chúng nó đây");
// console.log(...sizeOfSheep);
// 8.2
// let biggestSize = Math.max(...sizeOfSheep);
// console.log(`Đây bây giờ nhé con to nhất của tao cỡ ${biggestSize} xẻo nó đuê`);
// 8.3
// sizeOfSheep[sizeOfSheep.indexOf(biggestSize)] = 8;
// console.log("Ok tùng xẻo xong rồi giờ thì đây là kích cỡ");
// console.log(...sizeOfSheep);
// 8.4 and 8.5 in a nutshell
// for (let i = 1; i <= 4; i++) {
//   for (let i = 0; i < sizeOfSheep.length; i++) {
//     sizeOfSheep[i] += 50;
//   }
//   console.log(`Month ${i}`);
//   console.log("One month has passed this is the size of sheep");
//   console.log(...sizeOfSheep);
// }
// 8.6
// let tongKichCo = 0;
// for (const size of sizeOfSheep) {
//   tongKichCo += size;
// }
// let tienKiemDuoc = tongKichCo * 200000;
// console.log(`Đây nhé cừu của tao tổng to ngần này ${tongKichCo}`);
// console.log(`Tao phải được ngần này ${tongKichCo} * 200000$ = ${tienKiemDuoc}`);

// Bai9
// let size = 100;
// const colors = ['red', 'gray', 'blue', 'purple', 'cyan'];
// for(let i = 0 ; i < colors.length ; i++) {
//   for(let j = 0 ; j < 4; j++) {
//   color(colors[i]);
//   fd(size);
//   rt(90);
//   }
//   size += 100;
// }

// Bai10
// const arrayName = prompt("Nhập số vào và ngăn cách bởi dấu phẩy ạ").split(
//   ","
// );
// const newArray = arrayName.map((name) => {
//   return `<${name}>`;
// });
// alert(`${arrayName} => ${newArray}`);

// Bai11
// const number = prompt("Nhập số vào và ngăn cách bởi dấu phẩy ạ").split(
//   ","
// );
// const newArray = number.map((num) => {
//   return Number(num);
// });
// const oddNumber = newArray.filter((num) => {
//   return num % 2 == 0;
// });
// alert(`${newArray} => ${oddNumber}`);