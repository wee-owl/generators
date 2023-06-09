/* eslint-disable no-console */
function canIterate(object) {
  if (object === null) return false;
  return (typeof (object[Symbol.iterator]) === 'function');
}

console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate('Netology')); // true
