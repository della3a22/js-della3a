const x = 22; // number
const y = 'hello'; // string
const z= false ;// boolean
//deduce data type
console.log(typeof x, typeof y, typeof z);

//min max safe numeric value
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991

//min max possible numeric value.
// Exactly such numbers, because they are stored in 64 bits of memory.
// If we try to add 2 to the maximum safe number,
// then the answer will be incorrect due to the fact that the number in binary form does not look as expected.
// In this case, a new data type was invented - Bigint.
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324