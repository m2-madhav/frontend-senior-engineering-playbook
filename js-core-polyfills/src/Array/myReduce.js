const arr = [3, 4, 5, 6, 7, 8, 9];
// let sum = arr.reduce((acc, sum) => {
//   sum += acc;
//   return sum;
// }, 0);
function calSum(x, y) {
  return x + y;
}
// Array.prototype.myReduce = function (callback, thisArg) {
//   let sum = 0;
//   let context = thisArg || undefined;
//   for (let i = 0; i < this.length; i++) {
//     sum = callback.call(context, sum, this[i], i, this);
//   }
//   return sum;
// };

// although above implementation gives correct answer but in edge case this fails and reduce does not support thisArg and second parameter is initialValue nor context
// important to note that if no initial value is provided then first element is treated as accumulator
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator;
  let startIndex;
  if (this.length === 0 && initialValue === undefined) {
    throw new Error("Reduce of empty array with no initial value");
  }
  if (!!initialValue) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = this[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

// edge case is what if empty array is passed
console.log(arr.myReduce(calSum));
