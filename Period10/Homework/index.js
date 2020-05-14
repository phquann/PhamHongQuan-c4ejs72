  // Bai4
const getRandom = () => {
const randomNumber = Math.floor(Math.random() * 11);
return randomNumber;
  };
const x = getRandom();
if (x < 0) {
    alert("Nhỏ hơn 0 rồi cmm");
  } else if (x > 10) {
    alert("To quá rồi bé bé thôi không là không vừa");
  } else {
    alert("Ok vừa xinh, mlem mlem");
}
  
  // Bai5
const getRandomInRange = (min, max) => {
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
return randomNumber;
};
const x = getRandomInRange(4, 16);
if (x < 4) {
    alert("Nhỏ hơn 14 rồi lè lè");
    } else if (x > 16) {
    alert("To hơn 16 rồi lêu lêu");
    } else {
    alert("Ngon luôn mlem mlem");
}
  
  //Bai6
const getRange = (x1, y1, x2, y2) => {
const result = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
return result;
};
const d = getRange(3, 10, 0, 6);
if (d !== 5) {
    alert("Tính sai cmnr :))");
  } else {
    alert("Ok khôn đấy")
}