// Создать страницу, которая спрашивает у пользователя температуру за окном. В зависимости от температуры на фон body должна ставиться разная картинка. Предусмотреть 5 вариантов исхода событий



// console.log я для себя, а то не просто протестировать не запомнив картинки.

document.body.className = 'hot';

 let weather =  prompt('Какая за окном температура воздуха');
 

 if (weather >= 30 ) {
    document.body.className = 'hot';
    console.log('>30');
 }

 else if ( weather >= 15 && weather < 30) {
    document.body.className = 'warmly';
    console.log('15 - 30');
 }

 else if (weather >= 0 && weather < 15){
    document.body.className = 'normal';
    console.log('от 0 до 15');
 }

 else if (weather >= -15 && weather < 0){
    document.body.className = 'cold';
    console.log('от 0 до -15');
 }

 else if (weather > -30 && weather < -15){
    document.body.className = 'veryCold';
    // console.log('-15 до 30');
 }

 else if (weather <= -30){
    document.body.className = 'hell';
    console.log('адище');
 }

 else {
     alert('Вы ввели ошибочное значение! Попробуйте еще раз и все получится!');
 }



