//Дано положение часовой стрелки (в градусах). Определить часы и минуты
let gradus = 250                                        // дано градусов часовой стрелки

let h2 = Math.floor(gradus/5/6)                         //? найти часы
let m2 = (gradus-h2*5*6)*2                              //? найти минуты 
                                                        //  m2*2 потому что 1*град часа = 2минуты,
                                                        //  30*град часа = 60 минут                                                         //()

console.log(`${h2}:${m2}`);                             //Ответ 8:20