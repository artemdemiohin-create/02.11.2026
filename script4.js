//Задание 6
const inputElement = document.getElementById('username');
const resultElement = document.getElementById('result');
const currentValue = inputElement.value;
console.log("Текущее поле ввода: ", currentValue);
inputElement.value = "Отличник";
resultElement.textContent = "Новое значение: ", inputElement.value
