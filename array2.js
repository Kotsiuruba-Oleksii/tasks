/*Написать функцию, в которую передается не пустой одномерный целочисленный массив, метод должен вернуть true,
        если в массиве есть место, в котором сумма левой и правой части массива равны.
        Примеры: [2, 2, 2, 1, 2, 2, || 10, 1]) → true*/
let arr = [2,2,2,1,2,2,10,1]                   //массив

function checkBalance(arr){
    
    let total = 0                              //сумма всех элементов массива
    for(let i=0; i<arr.length; i++){           
        total += arr[i]
    }

    let sum = 0                                //сумма элементов массива слева = total/2
    for(let i=0; i<arr.length; i++){           
        sum += arr[i]
        if(sum===total/2){
            return true
        }
    }
    return false
}

console.log(checkBalance(arr))