import * as GlobalVar from '../services/global-var-service';
import * as DomLoader from '../modules/dom-loader';

export function getCharacterMatches(word, char) {
    word = word.replace(/\s/g, '');
    var indices = [];
    for (var i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() == char.toLowerCase()) indices.push(i);
    }
    return indices;
}

export function getGuessingWord(arr) {
    var guessIndex = parseInt(Math.random() * arr.length)
    return arr[guessIndex]
}

export function wordGuessed(name) {
    var letters = DomLoader.queryLetter()
    var lettersGuessed = [];
    letters.forEach(char => char.textContent != '' ? lettersGuessed.push(char) : '');
    if (lettersGuessed.length == name.replace(/\s/g, '').length) {
        GlobalVar.interval.stop();
        DomLoader.showModalReset('You guessed right!');
    }
}