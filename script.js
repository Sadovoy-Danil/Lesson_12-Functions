// let num = 20;

// function showFirstMessage (text) {
//     alert(text);
//     console.log(num);
// }

// showFirstMessage('Hello World!');
// console.log(num); // it's OKay

console.log(calc(3, 4));
console.log(calc(7, 8));
                            // Function Declaration — «Декларация функции»
function calc(a, b) {
    return (a + b); // Возврат
}

// ----------------------------------------------------------------------------

let returnVariable = function() {
    let num = 50;
    return num;
};
                            // Function Expression — «Функциональное выражение»
let anotherNum = returnVariable();

console.log(anotherNum);

let arrowFunc = (a, b) => a + b;

let str = 'Test';
console.log(str.length); // Длина строки переменной str (property «Свойство»)

console.log(str.toUpperCase()); // Вывод переменной str в верхнем регистре (method «Метод»)
console.log(str.toLowerCase()); // Вывод переменной str в нижнем регистре (method «Метод»)