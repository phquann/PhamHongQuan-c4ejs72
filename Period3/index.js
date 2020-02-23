let monAn = ['pho', 'com', 'bun', 'chao', 'mi']
console.log(monAn)
monAn.splice(0, 1)
monAn[1]= 'bun dau'
monAn.push('thit lon')
for(let i=0; i<monAn.length; i++) {
    console.log(i, monAn[i])
}
