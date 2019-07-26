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

const printChar = (wordObj, counter, clues, e) => {
    let char = e.target.innerHTML;
    let letters = document.querySelectorAll('.letter');
    let charIndexArr = HangMan.getCharacterMatches(wordObj.name, char);
    e.target.setAttribute('disabled', '');
    if (Array.isArray(charIndexArr)) {
        charIndexArr.forEach(index => {
            letters[index].innerHTML = char;
        });
    } else {
        var failCounter = counter()
        if (failCounter == 2) {
            DomLoader.printClues(clues(), "firstClue")
        } else if (failCounter == 4) {

            DomLoader.printClues(clues(), "secondClue")
        }

    }
}

startGame()

function startGame() {
    var wordObj = HangMan.getGuessingWord(guessArr);
    var wordName = wordObj.name
    var counter = HangMan.countFailures();
    var clues = HangMan.generateClue(wordObj)
    DomLoader.renderButtons()
    DomLoader.renderLetterContainers(wordName);
    DomLoader.addListenerButtons(wordObj, counter, clues, printChar);
}