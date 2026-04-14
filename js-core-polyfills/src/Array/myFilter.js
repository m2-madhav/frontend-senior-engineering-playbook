const arr = [3, 4, 5, 6, 7, 8, 9];
//console.log(arr.filter((x) => x % 2));

function odd(x) {
  return x % 2 !== 0;
}
Array.prototype.myFilter = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) newArr.push(this[i]);
  }
  return newArr;
};
//console.log(arr.myFilter(odd));
// using this Argument
Array.prototype.myFilterUsingArg = function (callback, thisArg) {
  let newArr = [];
  let context = thisArg || undefined;
  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};
console.log(arr.myFilterUsingArg(odd));
