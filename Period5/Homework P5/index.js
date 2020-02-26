// Bai1
// const obj = {};
// function reverseObject(object) {
//        for (var key in obj) {
//         obj[object[key]]= key;
//     }
//     console.log(object);       
//     return object 
// }

// Bai2
// function keysAndValues(obj) {
//     const result = [];
//     for (const item in obj) {
//       result.push(item);
//     }
//     for (const item in obj) {
//       result.push(obj[item]);
//     }
//     return result;
// }

// Bai3
// function getFrequencies(array) {
//     return array.reduce((output, input) => {
//       op[input] = op[input] || 0
//       op[input]++
//       return output
//     },{})
// }

// Bai4
// function mapLetters(string) {
//     const array = string.split("");
//     const result = array.reduce((accumulator, currentItem, currentIndex) => {
//       if (!accumulator[currentItem]) {
//         accumulator[currentItem] = [];
//         accumulator[currentItem].push(currentIndex);
//       } else {
//         accumulator[currentItem].push(currentIndex);
//       }
//       return accumulator;
//     }, {});
//     return result;
// }

// Bai5
// function khaBanh(str) {
//     let newString = "";
//     newString += str[0];
//     for (let i = 1; i < str.length; i++) {
//       if (
//         newString[i - 1] === newString[i - 1].toUpperCase() &&
//         newString[i - 1] !== " "
//       ) {
//         newStringing += str[i].toLowerCase();
//       } else if (
//         newString[i - 1] === newString[i - 1].toLowerCase() &&
//         newString[i - 1] !== " "
//       ) {
//         newString += str[i].toUpperCase();
//       } else if (newString[i - 1] === " ") {
//         if (newString[i - 2] === newString[i - 2].toUpperCase()) {
//           newString += str[i].toLowerCase();
//         } else if (newString[i - 2] === newString[i - 2].toLowerCase()) {
//           newString += str[i].toUpperCase();
//         }
//       }
//     }
//     return newString;
// }  

// Bai6
// function censoredString(str) {
//     const coder = "PythonPHPJavaC++GoLang";
//     let newStr = "";
//     for (let i = 0; i < str.length; i++) {
//       if (coder.includes(str[i])) {
//         newStr += "*";
//       } else newStr += str[i];
//     }
//     return newStr;
//   }