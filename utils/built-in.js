console.log(parseInt('b123')); // NaN
console.log(parseInt('123z456')); // 123
console.log(parseInt(1.9)); // 1
console.log(parseInt('')); // NaN 
console.log(parseInt(' ')); // NaN
console.log(parseInt(20, 16)); // 32
console.log(parseFloat(12e-1)); // 1.2
console.log(isFinite(12e-1)); // true
console.log((Number.MAX_VALUE)); // 
console.log(isFinite(Number.MAX_VALUE)); // true
console.log(isFinite(Number.POSITIVE_INFINITY)); // false
console.log(isNaN(NaN));
console.log(isNaN(' '));
console.log(isNaN(2/0)); // false