const arr = [3, 4, 5, 6, [4, 5, [2, 3, [9, 10, 22]]]];

//const newArr = arr.flat(3);

// Array.prototype.myFlat = function () {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (Array.isArray(this[i])) {
//       newArr.push(...this[i].myFlat());
//     } else newArr.push(this[i]);
//   }
//   return newArr;
// };
// this is implementation whithout depth params as we know flat function takes depth as argument

Array.prototype.myFlat = function (depth) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && depth > 0) {
      newArray.push(...this[i].myFlat(depth - 1));
    } else newArray.push(this[i]);
  }
  return newArray;
};

console.log(arr.myFlat(3));
