import {countCards, dataAncients} from './countsCards';
import {sortCollection} from './sortCollectionCards';
import {sortStages} from './sortStage';
import {createViewStages} from './createViewStages';
import {decksFloor} from './decks-floor';

const mixerDecksMain = () => {

    // Определения уровня игры
    const level = levelPlay();
    // Определение выбраного древнего
    const ancient = getAncient();
    // Добавление заголовков для отображения уровня игры и выбраного Древнего
    addHeaderDecks(level[1], ancient);
    // Возвращает обьект количество необходимых карт на все три этапа
    const countCard = countCards(ancient);
    // Получаем массив сортированный под выбранный уровень и Древнего Возвращает объект
    const collectionCards = sortCollection(level[0], countCard);
    // Формируем массив карт разложенные по этапам Должен вернуться массив обьектов (последний этап в начале массива)
    const collectionStages = sortStages(ancient, collectionCards);
    // Передаем сформированный массив карт в функцию обрабочика клика для извелечения карт из колоды
    decksFloor(collectionStages);
    // Функция формирования view для стадий игры с количеством карт на каждом этапе (передаем объект с данными для выбраного Древнего)
    const createView = createViewStages(dataAncients(ancient));
} 

// Функция определения уровня игры (возвращает массив) 
const levelPlay = () => {
    const buttonsLevel = [... document.querySelectorAll('.level')];
        const level = buttonsLevel.find((but) => {
            if(but.classList.contains('active-level')) {
                return true;
            }
        })
    return [level.dataset.level, level.textContent];
}

// Функция определения выбраного Древнего
const getAncient = () => {
    const ancietns = [...document.querySelectorAll('.ancients-item')];
    const result = ancietns.find((elem) => {
        if(elem.classList.contains('ancient-active')){
            return true;
        }
    });
    return result.dataset.id;
}


//  ######### Функции добавления заголовков ####################### 

// Добавление названия уровня в описании 
const addNameLevelHtml = (name) => {
    const nameHeader = document.querySelector('.name-level');
    nameHeader.textContent=name;
}

// Добавление названия выбраного Древнего 
const addNameAncietns = (name) => {
    const nameAncient = document.querySelector('.name-ancients');
    let upName =  name[0].toUpperCase() + name.slice(1);
    nameAncient.textContent = upName;
}

// Изменение заголовков (вызов двух предыдущих функций)
const addHeaderDecks = (level , name) => {
    addNameLevelHtml(level);
    addNameAncietns(name);
}

// ################################################################

export {mixerDecksMain, levelPlay};