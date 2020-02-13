// let a = true
// for(let i=100; i>0; i-=1) {
//     console.log(i)
// }

a = prompt('Nhap a=?', Number)
b = prompt('Nhap b=?', Number)
c = prompt('Nhap c=?', Number)
z = b**2-4*a*c
if(z > 0) {
    x1 = (Math.sqrt(z)-b)/(2*a)
    x2 = (-(Math.sqrt(z))-b)/(2*a)
    console.log(x1)
    console.log(x2)
} 
else if(z == 0) {
    x = -b/(2*a)
    console.log(x)
}
else (z < 0) {
    console.log('Phuong trinh vo nghiem')
}