import { witcherSilverSwords } from "./silver-swords-list.js";

const quickSortSwords = (swords, left, right) => {
    if(swords.length > 1){
        let currentIndex = partition(swords, left, right);

        if (left < currentIndex - 1) {
            quickSortSwords(swords, left, currentIndex - 1);
        }

        if (currentIndex < right) {
            quickSortSwords(swords, currentIndex, right);
        }
    }

    return swords;
}

const partition = (swords, left, right) => {
    let pivot = swords[Math.floor((left + right) / 2)];
    let currentLeft = left;
    let currentRight = right;

    while (currentLeft <= currentRight) {
        while (swords[currentLeft].price < pivot.price) {
            currentLeft++;
        }

        while (swords[currentRight].price > pivot.price) {
            currentRight--;
        }

        if (currentLeft <= currentRight) {
           changePosition(swords, currentLeft, currentRight);
           currentLeft++;
           currentRight--; 
        }
    }

    return currentLeft;
}

const changePosition = (swords, from, to) => {
    const element1 = swords[from];
    const element2 = swords[to];

    swords[from] = element2;
    swords[to] = element1;
}

console.log(quickSortSwords(witcherSilverSwords, 0, witcherSilverSwords.length - 1));