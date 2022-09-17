/*Даны целые числа h и m, указывающие момент времени: "h часов" и "m минут". 
Определить меньший угол (в градусах) между положением часовой и минутной стрелок*/

let h = 8                                               //введите часы
let m = 20                                              //введите минуты

let mg = m*6                                            // количество градусов для минутной стрелки
console.log(mg, '*количество градусов для m');

let hg = h*5*6 + 0.5*m                                  // количество градусов для часовой стрелки
console.log(hg, '*количество градусов для h');

function result (mg, hg){
    if(hg>mg){
        return hg - mg
    } else {
        return mg - hg
    }
}
console.log(result(mg,hg), '*градусов разницы');        //ответ: количество градусов между стрелками
