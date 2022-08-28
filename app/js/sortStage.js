import {dataAncients} from './countsCards';
import {randomArray} from './sortCollectionCards';

export const sortStages = (name, collection) => {
    const result = [];

    const data = dataAncients(name);
    
    const createDecks = (stage) => {
        const temp = [];
        const colors = ['blueCards','greenCards','brownCards'];
        colors.forEach((color)=>{
            if(data[stage][color] > 0) {
                let colorCollection = color.slice(0,-5);
                temp.push (...collection[colorCollection].splice(0, data[stage][color]));
            }
        });

        // Перемешиваем набор 
        const random = randomArray(temp.length, temp.length);
                random.forEach((value) => {
                    result.push(temp[value]);
                });
        }

        if (typeof(data) === 'object') {
            createDecks('thirdStage');
            createDecks('secondStage');
            createDecks('firstStage');
        }
    return result;
}