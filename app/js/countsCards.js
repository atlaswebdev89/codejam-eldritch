// Импортируем файл Древних
import ancients from './ancients-data';

// Функция определения необходимого количества карт для данного древнего
export const countCards = (id) => {
    const dataAncient = dataAncients(id);

    const result = {};
        for(let value in dataAncient) {
            if(typeof(dataAncient[value]) === 'object') {
                for (let item in dataAncient[value]) {
                    if(result[item]) {
                        result[item] += dataAncient[value][item];
                    }else {
                        result[item] = dataAncient[value][item];
                    }
                }
            }
        }
    return result;
}

export const dataAncients = (id) => {
    return ancients.find((elem) => elem.id === id);
}
