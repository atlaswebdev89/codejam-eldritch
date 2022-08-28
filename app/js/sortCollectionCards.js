import {greenCards} from './data-green';
import {brownCards} from './data-brown';
import {blueCards} from './data-blue';


export const sortCollection = (level, cards) => {
    const objectResult = {};
    objectResult.green = getCollections(level, greenCards, cards.greenCards);
    objectResult.brown = getCollections(level, brownCards, cards.brownCards);
    objectResult.blue = getCollections(level, blueCards, cards.blueCards);
    return objectResult;
}

// Фильтрация коллекции карт в зависимости от уровня игры 
const filterCOllection = (level, collection) => {
    switch(level) {
        case 'easing':
            return filterEasing(collection);
        case 'easy':
            return filterEasy(collection);
        case 'normal':
            return collection;
        case 'hard':
            return filterHard(collection);
        case 'harded':
            return filterHarded (collection);
        default:
            return collection;
    }
}
// Фильтрация для очень легкого уровня (оставляем только карты со звездочкой)
const filterEasing = (collection) => {
    return collection.filter((elem) => elem.difficulty === 'easy');
}
// Функция фильтрации (убираем все карты со щупальцами) Для легкого уровня
const filterEasy = (collection) => {
    return collection.filter((elem) => elem.difficulty != 'hard');
}
// Функция фильтрации (убираем все карты со снежинкой)
const filterHard = (collection) => {
    return collection.filter((elem) => elem.difficulty != 'easy');
}
// Фильтрация для очень сложного уровня (оставляем только карты со щупальцами)
const filterHarded =(collection) => {
    return collection.filter((elem) => elem.difficulty === 'hard');
}

// Получение коллекции карт в зависимости от уровня и Древнего
const getCollections = (level, cards, count) => {
    let result;
    const data = filterCOllection(level, cards);

    // Если количество карт после фильтрации меньше чем надо добавляем недостающие карты используя normal карты
    if(data.length < count) {
        const added = randomNorlam(cards, (count - data.length));
        data.push(...added);
        result = data;
    }else {
         result = randomCollection (data, count);
    }
    return result;
};

// Функция рандомного выбора из набора 
const randomCollection = (collection, count) => {
    const result = [];
    const random = randomArray(collection.length, count);
    random.forEach((value) => {
        result.push(collection[value]);
    });
    return result;
}

// Функция рандомного выбора из набора обычных карт
const randomNorlam = (collection, count) => {
    const result = [];
    // Массив только normal кард
    const normal = collection.filter((elem) => elem.difficulty === 'normal');
    const random = randomArray(normal.length, count);
    random.forEach((value) => {
        result.push(normal[value]);
    });
    return result;
}

// Функция формирования массива уникальных значений полученных рандомным путем 
export const randomArray = (max, count) => {
    const random = [];
    // Формируем массив уникальных случайных значений
    for (let i = 0; i < count; i++) {
        // Получаем случайное число от 0 до длины массива
          let rand = Math.floor(Math.random() * max); 
          if (random.indexOf(rand) == -1) {
              random.push(rand);
          }else {
              i--;
          }
      }
      return random;
}