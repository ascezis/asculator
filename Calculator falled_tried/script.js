//Получаю данные кнопок:
const plus = document.getElementById('+');
const minus = document.getElementById('-');
const multiplication = document.getElementById('*');
const division = document.getElementById('/');
const input = document.getElementById('input_value');
const equal = document.getElementById('=');

//Получаю данные значений:

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const nulled = document.getElementById('0');

//Делаю вывод каждой кнопки:
plus.addEventListener("click", function (){
    input.value = '+';
});
minus.addEventListener("click", function (){
    input.value = '-';
});
multiplication.addEventListener("click", function () {
    input.value = '*';
});
division.addEventListener("click", function () {
    input.value = '/';
});
equal.addEventListener('click', function (){
    input.value = '=';
});


//Делаю вывод каждой цифры:

one.addEventListener('click', function (){
    input.value = '1';
});
two.addEventListener('click', function (){
    input.value = '2';
});
three.addEventListener('click', function (){
    input.value = '3';
});
four.addEventListener('click', function (){
    input.value = '4';
});
five.addEventListener('click', function (){
    input.value = '5';
});
six.addEventListener('click', function (){
    input.value = '6';
});
seven.addEventListener('click', function (){
    input.value = '7';
});
eight.addEventListener('click', function (){
    input.value = '8';
});
nine.addEventListener('click', function (){
    input.value = '9';
});
nulled.addEventListener('click', function (){
    input.value = '0';
});
