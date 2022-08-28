export const createViewStages = (data) => {
    for(let item in data) {
        if(typeof(data[item]) === 'object') {
            for (let stage in data[item]) {
                document.querySelector(`.${item}`).querySelector(`.${stage}`).innerHTML = data[item][stage];
            }
        }
    }
    // Спрячем открытые карты из прошлого замеса
    document.querySelector('.decks-done').classList.remove('show-decks-done');
}