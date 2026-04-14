const arr = [3, 4, 5, 6, 7];
function multiply(x) {
  return x * 2;
}
Array.prototype.myMap = function (callbackfunc) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callbackfunc(this[i], i, this));
  }
  return newArr;
};
//console.log(arr.myMap(multiply, arr));
Array.prototype.myMapusingArg = function (callback, thisArg) {
  let newArr = [];
  let context = thisArg || undefined;
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback.call(context, this[i], i, this));
    // call is used so that context represents this in callback function
  }
  return newArr;
};
console.log(arr.myMapusingArg(multiply));

// NOTE:-  so basically in map function callback result is being pushed but in filter function original element is being pushed
