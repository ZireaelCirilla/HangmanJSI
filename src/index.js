import * as DomLoader from './modules/dom-loader';
import * as HangMan from './modules/hangman';


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


function startTimer(callback, time) {
    let i = time;
    let timer = setInterval(()=>{
        callback(i);
        i--;
        i == 0 ? finishGame(timer) : '';
    }, 1000);
    return timer;
}

const finishGame = (timer) => {
    console.log('finish game');
    clearInterval(timer);
    document.querySelectorAll('.clues').forEach(element => element.innerHTML = '');
    startGame();
}

const btnClickedChecker = (wordObj, counter, clues, e, timer) => {
    let char = e.target.innerHTML;
    let letters = document.querySelectorAll('.letter');
    let charIndexArr = HangMan.getCharacterMatches(wordObj.name, char);
    e.target.setAttribute('disabled', '');
    if (Array.isArray(charIndexArr)) {
        charIndexArr.forEach(index => {
            DomLoader.printChar(letters, char, index);
        });
    } else {
        var failCounter = counter()
        if (failCounter == 2) {
            DomLoader.printClues(clues(), "firstClue");

        } else if (failCounter == 4) {
            DomLoader.printClues(clues(), "secondClue")
        } else if(failCounter == 6){
            finishGame(timer);
        }
    }
}

function startGame() {
    var wordObj = HangMan.getGuessingWord(guessArr);
    var wordName = wordObj.name
    var counter = HangMan.countFailures();
    var clues = HangMan.generateClue(wordObj);
    let timer = startTimer(DomLoader.printTimer, 30);
    DomLoader.renderButtons()
    DomLoader.renderLetterContainers(wordName);
    DomLoader.addListenerButtons(wordObj, counter, clues, btnClickedChecker, timer);
}

startGame();