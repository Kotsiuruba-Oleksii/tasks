/*Напишите функцию getWeekDay(date), показывающую день недели 
в формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС»*/

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];  
  
    return days[date.getDay()];                              
  }
  
  let date = new Date(2019, 0, 3); // 3 января 2019 года
  console.log( getWeekDay(date) ); // ЧТ