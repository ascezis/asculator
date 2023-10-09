"use strict"
//Получаю значения:
let user_current = document.getElementById('User_time'); //вводит минуты;
let start = document.getElementById('Start');
let stop = document.getElementById('Stop');
let nulled = document.getElementById('nulled');
let timer;
//

//
let mess = 'Перезрел! Отдохни!';
//

//Таймер:
function Timer() {
    timer = setTimeout(() => {
        //Беру ЗНАЧЕНИЕ этого элемента
        user_current.value--;
        if (user_current.value <= 0){
            user_current.value = ' '; //Пока просто очищаю;
            document.getElementById('message').innerHTML = mess;
            return;
        }
        //Рекурсивная функция (вызывает сама себя)
        else {
            Timer();
        }
    }, 1000);
}






//Добавляю обработчик начала события:
start.addEventListener('click', Timer);

//Остановка
stop.addEventListener('click', () => {
    clearTimeout(timer);
})

//Сброс таймера:

//Сброс таймера:

nulled.addEventListener('click', () => {
    clearTimeout(timer);
    user_current.value = 0;
})