const decksButton = document.querySelector('.decks-floor');
const decksDone = document.querySelector('.decks-done');
const nameStage = document.querySelectorAll('.name-stage');

const greenCards = document.querySelectorAll('.greenCards');
const brownCards = document.querySelectorAll('.brownCards');
const blueCards = document.querySelectorAll('.blueCards');

let collection = [];

// В функцию попадают карты для нового варианты игры (массив объектов);
export const decksFloor = (collections) => {
    collection = collections;
    // Удаляем активный класс
    delActiveStage();
}

decksButton.addEventListener('click', () => {
        const item = collection.pop();
        //функция появления карты из колоды 
        createKartinDecks (item);
        // Функция трекера изменения трекера
        changeTracker(item); 
    });

// Функция добавления карты на экран
const createKartinDecks = (item) => {
    if(item) {
        console.log(item);
        decksDone.classList.add('show-decks-done');
        decksDone.innerHTML = `<img class ="ancient" src="${item.cardFace}"/>`;
    }else {
        decksDone.classList.remove('show-decks-done');
    }
}
// Функция удаления активного класса у этапов игры 
const delActiveStage = () => {
    [...nameStage].forEach(value => value.classList.remove('active-stage'));
}


//Функция определяет количество стадий 
const checkStageNum = () => {
    return [...greenCards].length;
}

// Определение активной стадии 
const checkActiveStage = () => {
    const numStage = checkStageNum();
    for (let i=0; i < numStage; i++) {
        if(greenCards[i].innerHTML > 0 || brownCards[i].innerHTML > 0 || blueCards[i].innerHTML > 0) {
            nameStage[i].classList.add('active-stage');
            return i;
        }else {
            nameStage[i].classList.remove('active-stage');
        }
    }
}

// Функция изменения трекера
const changeTracker = (karta) => {
    const active = checkActiveStage();
    if(karta) {
        const color = karta.color + 'Cards';
        const htmlColor = document.querySelectorAll(`.${color}`);
        if(htmlColor[active].innerHTML > 0) {
            htmlColor[active].innerHTML = --(htmlColor[active].innerHTML);
        }
    }
}
