//Определить, является ли запись заданного натурального числа симметричной
let a = 123321

let b = a.toString().split("")

if(b.length%2===0){
    for(let i=0, x=b.length-1; i<b.length/2; i++, x--){
        if(b[i]!==b[x]){
            return console.log(false);
        }
    }
    console.log(true);
} else {
    console.log(false);
}                                                             //ответ: true
