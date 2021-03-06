import { witcherSilverSwords } from "./silver-swords-list.js";

const search = (array, from, to, searchValue) => {
    const middle = Math.floor((from + to) / 2);
    const current = array[middle];

    if (from > to) {   
        return console.log('Valor não encontrado');
    }

    if (searchValue === current.price) {
        console.log(`index do Objeto: ${middle}`);
        return middle;
    }

    if (searchValue > current.price) {
        return search(array, from, middle - 1, searchValue);
    }

    if (searchValue < current.price) {
        return search(array, middle + 1, to, searchValue);
    }

}

console.log(witcherSilverSwords[search(witcherSilverSwords, 0, witcherSilverSwords.length - 1, 440)]);