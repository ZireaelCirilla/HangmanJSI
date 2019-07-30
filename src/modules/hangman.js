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