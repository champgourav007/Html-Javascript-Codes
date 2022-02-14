const arr = [];
arr.push(5);
arr.push(21);
arr.push(89);
arr.push([2, 71]);
console.log(arr)
arr.push(31);
arr.splice(3, 0, [40, 99]);
console.log(arr)
arr.pop();
arr.shift();
console.log(arr.splice(1, 1));
arr.unshift(999);
console.log(arr);