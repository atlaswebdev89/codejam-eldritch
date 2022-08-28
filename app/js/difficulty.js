// Подключаем функция активации кнопки Смешивания колоды
const check = require('./mixer-activated');

const buttonsRoot = document.querySelector('.buttons-level');

//Функция удаления активного класса 
const notActiveButton = () => {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((element) => {
        element.classList.remove('active-level');
    });
}
// Обработчик клика по кнопке (Делегирование через родителя)
buttonsRoot.addEventListener('click', (event) =>{
    const target = event.target;
    if(target.classList.contains('button')) {
        notActiveButton();
        target.classList.add('active-level');
        check.checkSelect();
    }
});