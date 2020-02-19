// Bai1
// let a = 16;
// let b = 8;
// console.log(a, b);
// let temp = b;
// b = a;
// a = temp;
// console.log(a, b);

//Bai2
// const s = `Chao cac em xinh tuoi`;
// const a = s.split(" ");
// console.log(a);

//Bai3
// const a = [1, 6, 0, 8];
// console.log(...a);

//Bai4
// let brand = ['DirtyCoin', 'Clownz', 'Degree']
// let localBrand = ['DirtyCoin', 'Clownz', 'Degree']
// let a = prompt("Ok chào mày đến với Trần Dần shop, chọn thứ mày muốn đi(C,R,U,D)").toUpperCase()
// if(a == 'C' ){
    // let b = prompt("Muốn thêm cái gì nói mau ?")
    // localBrand.push(b) 
    // alert('Xong rồi đó rách việc quá')
    // console.log(localBrand)
// } else if(a == 'R'){
    // console.log('Sản phẩm đây nhìn cho kĩ vào:')
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
const arr = [1,6,0,8,2001];
let num = Number(prompt("Anh muốn mua vé số tờ nào ??"));
if (!arr.includes(num)) {
  alert(`${num} không trúng rồi haha chia buồn nha`);
} else {
  alert(`${num} trúng giải số ${arr.indexOf(num)} nè anh ơi chia em với nha`);
}
