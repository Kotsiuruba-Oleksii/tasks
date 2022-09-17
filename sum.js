/*Написать программу, в которой рассчитывается сумма цифр n-значного числа*/

let n = 123456                      //введите цифры, чтобы посчитать их сумму, можно через prompt

let m = n.toString().split("")
let total = 0
for(let i=0; i<m.length; i++){
    total += +m[i]
}
console.log(total);