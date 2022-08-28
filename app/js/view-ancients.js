// Импортируем файл Древних
import ancientsImg from './ancients-data';

const check = require('./mixer-activated');

// Создадим элемент (создаем структуру html из двух div и одного изображения);
const wrapperAncients = document.querySelector('.wrapper-ancients');

ancientsImg.forEach((value) => {
    let root = document.createElement('div');
        root.classList.add('ancients-item');
        root.dataset.id = value.id;
    let el = document.createElement('div');
        el.classList.add('ancients-overlay');
    // Создаем изображение
    const img = new Image();
        img.src = value.cardFace;
        img.classList.add('ancient');
    el.append(img);
    root.append(el);
    wrapperAncients.append(root);
});

// Делегирование обработчика
const wrapper = document.querySelector('.wrapper-ancients');
const itemsAncietns = document.querySelectorAll('.ancients-item');

//Функция удаления активного класса
const notActive = () => {
    itemsAncietns.forEach((value)=>{
        value.classList.remove('ancient-active');
    })
}

//Добавление обработчика на клик по выбору Древнего (делегирование)
wrapper.onclick = function(event) {
    const target = event.target;
        if(target.classList.contains('ancient')) {
                notActive();
            target.closest('.ancients-item').classList.add('ancient-active');
            check.checkSelect();
        }
}


