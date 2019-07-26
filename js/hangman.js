var guessArr = [{
    name: "Los Vengadores",
    clues: ["Son un equipo", "Protejen la tierra"]
}, {
    name: "Iron Man",
    clues: ["Es rojo", "Parece hecho de oro"]
},
{
    name: "Sully",
    clues: ["Hudson", "My Aircraft"]
},
{
    name: "DeadPool",
    clues: ["Piscina", "Roja"]
},
{
    name: "Terminal",
    clues: ["Deseo de un padre", "Hijo ejemplar"]
},
{
    name: "El Rey Leon",
    clues: ["Live Action", "Hakuna-Matata"]
},
];

const htmlButton = (val) => {
    return `<button id="btn-${val}" class="letter-btn">${val}</button>`;
}

const renderButtons = () => {
    let abc = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
    return abc.map(letter => htmlButton(letter)).join('');
}

const addListenerButtons = (word, counter, clues, callback) => {
    let arrBtn = document.querySelectorAll('.letter-btn');
    arrBtn.forEach(btn => btn.addEventListener('click', (e) => { callback(word, counter, clues, e) }));
}

const htmlLifeIcon = () => {
    return '<div class="life"><i class="fas fa-heart"></i></div>';
}

const renderLifeIcons = (NumOfLifes) => {
    let lifes = [];
    for (let i = 0; i < NumOfLifes; i++) {
        lifes.push(htmlLifeIcon());
    }
    return lifes.join('');
}

const htmlLetterContainer = (letter) => {
    let space = '<div class="letter-container"></div>';
    let htmlLetter = (`
        <div class="letter-container">
            <div class="letter"></div>
            <div class="underline"></div>
        </div>
    `);

    return letter !== ' ' ? htmlLetter : space;
}

const renderLetterContainers = (titleFilm) => {
    let titleArr = titleFilm.split('');
    return titleArr.map(val => htmlLetterContainer(val)).join('');
}

const printChar = (wordObj, counter, clues, e) => {
    let char = e.target.innerHTML;
    let letters = document.querySelectorAll('.letter');
    let charIndexArr = getCharacterMatches(wordObj.name, char);
    e.target.setAttribute('disabled', '');
    if (Array.isArray(charIndexArr)) {
        console.log("wtf");

        charIndexArr.forEach(index => {
            letters[index].innerHTML = char;
        });
    } else {
        console.log("WRONG");
        var failCounter = counter()
        if (failCounter == 2) {
            printClues(clues(), "firstClue")
        } else if (failCounter == 4) {
            console.log("fourth fail");

            printClues(clues(), "secondClue")
        }

    }
}

startGame()

function startGame() {
    var counter = countFailures();
    var wordObj = getGuessingWord(guessArr);
    var clues = generateClue(wordObj)
    var wordName = wordObj.name
    document.querySelector('.keyboard--container').innerHTML = renderButtons();
    addListenerButtons(wordObj, counter, clues, printChar);
    document.querySelector('.characters--container--fullword').innerHTML = renderLetterContainers(wordName);

    //Testing for the clue generator
    // var clues1 = generateClue(wordObj)
    // var clues2 = generateClue(getGuessingWord(guessArr))

    // console.log(clues1());
    // console.log(clues1());
    // console.log(clues2());
    // console.log(clues2());

}



function getCharacterMatches(word, char) {
    word = word.replace(/\s/g, '');
    console.log(word);
    var indices = [];
    for (var i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() == char.toLowerCase()) indices.push(i);
        console.log(indices);
    }
    if (indices.length > 0) {
        console.log("indices.length");
        return indices
    } else {
        return -1
    }

    // try {
    //     indices[0]
    //     return indices
    // } catch (error) {
    //     return -1
    // }

}

function getGuessingWord(arr) {
    var guessIndex = parseInt(Math.random() * guessArr.length)
    return arr[guessIndex]
}

function startTimer(time) {
    var timer = setTimeout(() => {
        // game finished logic goes here
        console.log(`Timer set for ${time} miliseconds`);
    }, time);
    return timer
}

function generateClue(wordObj) {
    console.log(wordObj);
    var clueCounter = 0
    return function () {
        if (clueCounter <= wordObj.clues.length - 1) {
            return wordObj.clues[clueCounter++]
        } else {
            console.log(clueCounter);
            console.log(wordObj.clues);
            return "No more clues :("
        }
    }
}

function countFailures() {
    var failures = 0
    return function () {
        console.log(`Failures ${failures}`);
        return failures += 1
    }
}

function printClues(clue, id) {
    //   return 
    // d
    document.getElementById(id).innerHTML = clue
}