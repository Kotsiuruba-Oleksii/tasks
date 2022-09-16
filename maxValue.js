//Найти максимальное значение в obj
let arr = {
    a: 8,
    b: 7,
    c: 9,
}

let max = 0
let name = ''
for(let [n, x] of Object.entries(arr)){
    console.log(n,x);
    if (max<x){
        max = x,
        name = n
    }
}
console.log();
console.log(max);
console.log(name);