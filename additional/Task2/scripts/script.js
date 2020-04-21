function compareArrays(array1, array2, func) {
    if(array1.length !== array2.length){
        return false;
    } else {
        let comparedArray = JSON.parse(JSON.stringify(array2));

        let result = array1.filter(function(element){
            let index = comparedArray.indexOf(func(element));
            // console.log(index);
            if( index!== -1){
                //якщо елемент знайшовся видиляємо
                comparedArray.splice(index,1);
                return true;
            }else
                return false;
        });
        // console.log(result);
        if(array1.length === result.length){

            return true;}
        else return false;
    }
}

console.log("[1,2,3] [9,1,4] —> TRUE");
console.log(compareArrays([1,2,3], [9,1,4], (x)=>{return x*x}));
console.log("[2,1,2] [1,1,4] —-> FALSE");
console.log(compareArrays([2,1,2], [1,1,4], (x)=>{return x*x}));
console.log("[1,2,3,5] [25, 9, 1, 4, 4] ——> FALSE");
console.log(compareArrays([1,2,3,5], [25, 9, 1, 4, 4], (x)=>{return x*x}));


console.log("okten -> token ——> TRUE");
console.log(compareArrays("okten".split(''), "token".split(''), (x)=>{return x}));
console.log("dima -> aimd —-—> TRUE");
console.log(compareArrays("dima".split(''), "aimd".split(''), (x)=>{return x}));
console.log("test -> rest ——> FASLE");
console.log(compareArrays("test".split(''), "rest".split(''), (x)=>{return x}));

