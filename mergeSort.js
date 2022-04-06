const priceSilverSwords = require('./silver-swords-list');

const mergeSortSwords = (listSwords) => {

    if(listSwords.length > 1) {
        const middle = Math.floor(listSwords.length / 2);
        const part1 = mergeSortSwords(listSwords.slice(0, middle));
        const part2 = mergeSortSwords(listSwords.slice(middle, listSwords.length));
        listSwords = orderSword(part1, part2);
    }

    return listSwords;
};

const orderSword = (receivePart1, receivePart2) => {
    let positionPart1 = 0;
    let positionPart2 = 0;
    const result = [];
    
    while(positionPart1 < receivePart1.length && positionPart2 < receivePart2.length) {
        let currentSword1 = receivePart1[positionPart1];
        let currentSword2 = receivePart2[positionPart2];

        if (currentSword1.price < currentSword2.price) {
            result.push(currentSword1);
            positionPart1++
        } else {
            result.push(currentSword2);
            positionPart2++
        }
    }

    return result.concat(positionPart1 < receivePart1.length ? receivePart1.slice(positionPart1) : receivePart2.slice(positionPart2));
};

console.log(mergeSortSwords(priceSilverSwords));