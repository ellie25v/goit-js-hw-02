'use strict';

let input;
const numbers = [];
let total = 0;

const reducer = (accumulator, currentValue) => accumulator + currentValue;


while (input !== null) {
    input = prompt('Введите число');

    if (Number.isNaN(Number(input))) {
        alert('Было введено не число, попробуйте еще раз');

    } else {
        numbers.push(Number(input));
        total = numbers.reduce(reducer);
        console.log(total);
    }
    
}
alert(`Общая сумма чисел равна ${total}`);