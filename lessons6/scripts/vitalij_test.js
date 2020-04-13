function digitsSum(number) {
    let result = number.toString().split('').reduce((a,b) => Number(a) + Number(b));
    console.log(result);
    return (result>10) ? digitsSum(result): result;
};
console.log("sum = " + digitsSum(16));
console.log("---------------------");
console.log("sum = " + digitsSum(942));
console.log("---------------------");
console.log("sum = " + digitsSum(132189));
console.log("---------------------");
console.log("sum = " + digitsSum(493193));