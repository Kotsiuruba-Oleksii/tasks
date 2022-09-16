/*разница между 2 датами*/
let date1 = new Date(1988, 5, 23)                                 
let date2 = new Date()
let interval = (date2-date1)/1000                       // секунды = миллисекунды/1000
                                                        // минуты = секунды/60
let year = Math.round(interval/60/60/24/365)            // часы = минуты/60
let month = Math.round(interval/60/60/24/30)            // Дни = часы/24
let day = Math.round(interval / 60 / 60 / 24);
let hour = Math.round(interval / 60 / 60 % 24);
let minute = Math.round(interval / 60 % 60);
let second = Math.round(interval % 60);
let result = {
                year: year,
                month: month,
                day: day,
                hour: hour,
                minute: minute,
                second: second
            }
console.log(result);