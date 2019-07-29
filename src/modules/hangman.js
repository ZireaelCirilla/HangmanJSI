export function getCharacterMatches(word, char) {
    word = word.replace(/\s/g, '');
    var indices = [];
    for (var i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() == char.toLowerCase()) indices.push(i);
    }
    if (indices.length > 0) {
        return indices
    } else {
        return -1
    }
}

export function getGuessingWord(arr) {
    var guessIndex = parseInt(Math.random() * arr.length)
    return arr[guessIndex]
}

export function generateClue(wordObj) {
    var clueCounter = 0
    return function () {
        if (clueCounter <= wordObj.clues.length - 1) {
            return wordObj.clues[clueCounter++]
        } else {
            return "No more clues :("
        }
    }
}

export function countFailures() {
    var failures = 0
    return function () {
        return failures += 1
    }
}

