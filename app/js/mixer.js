// импортируем главную функцию замешивания колоды карт
import {mixerDecksMain} from './mainMixer';

const mixer = document.querySelector('.mixer');
const decks = document.querySelector('.tracker-decks');
const ancients = document.querySelector('.ancients-button');
// Кнопка назад
const backButton = document.querySelector('.back');

// Функция добавления кнопки продолжить
const prevButton = () => {
    const buttons = [...document.querySelectorAll('.button')];
    if (!buttons.find((value) => value.classList.contains('previus'))) {
        const button = document.createElement('button');
        // Добавляем обработчик клика по кнопке 
        button.addEventListener('click', continuePlay);
        button.textContent = "Продолжить";
        button.className = "button previus";
        document.querySelector('.button-mixer').append(button);
    }
}

//Функция измениния названия кнопки 
const renameButton = () => {
    const mixer = document.querySelector('.mixer').innerHTML = 'Замешать заного';
}


// Функция скрытия выбора древного и показа колоды карт
const hideAncShowdecks = () => {
    ancients.classList.add('hide-display');
    decks.classList.remove('hide-display');
    decks.classList.remove('hide-opacity');
    ancients.removeEventListener('transitionend', hideAncShowdecks);
}

//Функция скрытия колоды карт и показа выбора древнего
const showAncHideDecks = () => {
    decks.classList.add('hide-display');
    ancients.classList.remove('hide-display');
    ancients.classList.remove('hide-opacity');
    decks.removeEventListener('transitionend', showAncHideDecks);
}

// Функция смены экрана 
const changeViews = () => {
    ancients.classList.add('hide-opacity');
    ancients.addEventListener('transitionend', hideAncShowdecks);
}

// Функция назад к выбору древнего
const backAncView = () => {
    decks.classList.add('hide-opacity');
    decks.addEventListener('transitionend', showAncHideDecks);
}

// Функция продолжить без нового замешивания колоды карт
const continuePlay = () => {
    changeViews();
}

// Обработчики событий по кнопкам

backButton.addEventListener('click', () => {
    backAncView();
});

mixer.addEventListener('click', () => {
    //Функция отбора карт и замешивания колоды!!! САМАЯ ГЛАВНАЯ ФУНКЦИЯ!!!
    mixerDecksMain();
    // Смена экрана
    changeViews();
    // Изменяем название кнопки замесить колоду
    renameButton();
    // Добавляем кнопка возврата
    prevButton();
});