let expenses = [];
let LIMIT = 10000;

let inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
let historyNode = document.querySelector('.js-history');
let totalNode = document.querySelector('.js-total');
let limitNode = document.querySelector('.js-limit');
let statusNode = document.querySelector('.js-status');
const setNode = document.querySelector('.js-btn-set');

limitNode.innerNext = LIMIT;

buttonNode.addEventListener('click', function(){
    // 1. Получаем значение из поля ввода
    if(!inputNode.value){
        return;
    }
    const expense = parseInt(inputNode.value);
    inputNode.value = '';

    // 2. Сохраняем трату в список
    expenses.push(expense);
    

    // 3. Выводим новый список трат
    let expensesListHTML = '';

    expenses.forEach(element => {
        expensesListHTML += `<li>${element} руб.</li>`;
    });

    historyNode.innerHTML = `<ol>${expensesListHTML}</ol>`;

    // 4. Sum
    let sum = 0;

    expenses.forEach(element => {
        sum += element;
    });

    totalNode.innerText = sum;

    if(LIMIT>=sum){
        statusNode.innerText = 'Всё хорошо';
    }else{
        statusNode.innerText = `Всё плохо (${LIMIT-sum} руб.)`;
        statusNode.classList.add('status_red');
    }

});

setNode.addEventListener('click', function(){
    totalNode = 0;
    expensesListHTML.innerHTML = '';
    statusNode.innerText = 'good'
    totalNode.innerText = '0 rub.'
    inputNode.value= '';
    expenses = [];
    statusNode = '';

    });


