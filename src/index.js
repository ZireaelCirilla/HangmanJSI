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


const errorHandler = (counter, timer, clues) => {
    var failCounter = counter();
        
    switch (failCounter) {
        case 1:
            DomLoader.printImg('../../images/head.png');
            break;
        case 2:
            DomLoader.printImg('../../images/body.png');
            DomLoader.printClues(clues(), "firstClue");
            break;
        case 3: 
            DomLoader.printImg('../../images/left-arm.png');
            break;
        case 4:
            DomLoader.printImg('../../images/right-arm.png');
            DomLoader.printClues(clues(), "secondClue")
            break;
        case 5:
            DomLoader.printImg('../../images/left-leg.png');
            break;
        case 6:
            DomLoader.printImg('../../images/right-leg.png');
            finishGame(timer);
            break;
        default:
            break;
    }
}

function startTimer(callback, time) {
    let i = time;
    let timer = setInterval(()=>{
        callback(i);
        i--;
        i == 0 ? finishGame(timer) : '';
    }, 1000);
    return timer;
}

const restart = () => {
    document.querySelectorAll('.clues').forEach(element => element.innerHTML = '');
    DomLoader.printImg('../../images/horca.png');
    document.getElementById('modal-container').style.display = 'none';
    startGame();
}

const finishGame = (timer) => {
    console.log('finish game');
    clearInterval(timer);
    document.getElementById('modal-container').style.display = 'block';
    document.getElementById('restart').addEventListener('click', restart);
}

const btnClickedChecker = (wordObj, counter, clues, e, timer) => {
    let char = e.target.innerHTML;
    let letters = document.querySelectorAll('.letter');
    let charIndexArr = HangMan.getCharacterMatches(wordObj.name, char);
    e.target.setAttribute('disabled', '');
    if (charIndexArr.length > 0) {
        charIndexArr.forEach(index => {
            DomLoader.printChar(letters, char, index);
        });
    } else {
        errorHandler(counter, timer, clues);
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