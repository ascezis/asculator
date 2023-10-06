//Достаю значение Input
let input = document.getElementById('screen');
//Получаю значения всех кнопок в виде массива:
let buttons =  document.querySelectorAll('button:not(#equal):not(#clear):not(#clear_step)');

function showScreen() {
    //Перебираю массив кнопок
    for (let i = 0; i < buttons.length; i++) {
        //Вытаскиваю отдельную кнопку и задаю ей событие
        buttons[i].addEventListener('click', () => {
            //Значением каждой отдельной кнопки будет то, что она отображает
            let v = buttons[i].textContent;
            //Заменяю input на значение каждой отдельной кнопки;
            input.value += v;
        })
    }
}

//Это для привязки кнопки =
function result() {
    let res_value = (eval(input.value));
    document.getElementById('screen').value = res_value;
}

//Вывод результата:
let resulted = document.getElementById('equal');

resulted.addEventListener("click", result);



//Функция очистки:
function isClearInput(){
    let clear = '';
    document.getElementById('screen').value = clear;
}
//Беру значения кнопки
let buttonClear = document.getElementById('clear');
//Задаю очередь
buttonClear.addEventListener('click', isClearInput);

//Функция очистки одного значения

function isClearInputOne() {
    let arr = input.value.split('');
    let new_arr = arr.slice(0, arr.length - 1).join('');
    document.getElementById('screen').value = new_arr;
}
let one_elem_cl = document.getElementById('clear_step');
one_elem_cl.addEventListener('click', isClearInputOne);
