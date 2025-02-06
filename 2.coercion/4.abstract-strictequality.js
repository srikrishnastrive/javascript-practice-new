console.log(null == undefined);

console.log(4 == '4');

console.log(null == false);

/**
 * y is boolean -- > ToNumber --> 0
 * null == 0
 * false
 */

console.log(NaN === NaN);
console.log(NaN == NaN);

console.log(0 === -0);
let obj = {x :10,valueOf() {return 100;}};
console.log(99 == obj);
console.log(100 == obj);
























































// console.log({x:10} === {x:10});
