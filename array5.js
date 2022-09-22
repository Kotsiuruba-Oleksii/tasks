/* Определить количество натуральных чисел из интервала
от 100 до 500, сумма цифр которых равна 15 */

[a,b] = [100,500]
let result = 0

for(let i=a; i<=b; i++){
  let arr = i.toString().split("")
  let total = 0

  for(let j=0; j<arr.length; j++){
    total += +arr[j]
  }

  if(total===15){
    console.log(arr);
    result++
  }
}

console.log(result);                    // Ответ: 26