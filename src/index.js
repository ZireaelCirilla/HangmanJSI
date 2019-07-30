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

const countDown = {
    time: 0,
    count(){
        return this.time--;
    },
    printTime(){
        document.querySelector('#timer').innerHTML = this.time;
    },
    setTime(newTime){
        this.time = newTime;
    },
    finish(){
        interval.stop();
        showModal();
    }
}

const intAction = () => {
        countDown.time <= 0 ? countDown.finish() : '';
        countDown.printTime();
        countDown.count();
}

const interval = {
    init: setInterval(intAction,1000),
    stop(){
        clearInterval(this.init);
    },
    reset(){
        this.init = setInterval(intAction, 1000);
    }
};

const fails = {
    total: 0,
    sum(){
        this.total++;
    }
}

const clues = {
    firstClue: '',
    secondClue: ''
}

const errorHandler = () => {
    fails.sum();
    let currentTime = countDown.time;

    switch (fails.total) {
        case 1:
            DomLoader.printImg('/images/head.png');
            break;
        case 2:
            DomLoader.printImg('/images/body.png');
            DomLoader.printClues(clues.firstClue, Object.keys(clues)[0]);
            countDown.time - 5 <= 0 ? countDown.finish(interval) : countDown.setTime((currentTime - 5));
            break;
        case 3:
            DomLoader.printImg('/images/left-arm.png');
            break;
        case 4:
            DomLoader.printImg('/images/right-arm.png');
            DomLoader.printClues(clues.secondClue, Object.keys(clues)[1]);
            countDown.time - 5 <= 0 ? countDown.finish(interval) : countDown.setTime((currentTime - 5));
            break;
        case 5:
            DomLoader.printImg('/images/left-leg.png');
            break;
        case 6:
            DomLoader.printImg('/images/right-leg.png');
            countDown.finish(interval);
            break;
        default:
            break;
    }
}

const restart = () => {
    document.querySelectorAll('.clues').forEach(element => element.innerHTML = '');
    DomLoader.printImg('/images/horca.png');
    hideModal();
    fails.total = 0;
    interval.reset();
    startGame();
}

function showModal(title = "Game Over") {
    document.getElementById('modal-container').style.display = 'block';
    document.getElementById('modal--content').innerHTML = title;
    document.getElementById('restart').addEventListener('click', restart);
}

function hideModal() {
    document.getElementById('modal-container').style.display = 'none';
}

const checkBtn = (wordObj, e) => {
    let char = e.target.innerHTML;
    let letters = document.querySelectorAll('.letter');
    let charIndexArr = HangMan.getCharacterMatches(wordObj.name, char);
    e.target.setAttribute('disabled', '');
    if (charIndexArr.length > 0) {
        charIndexArr.forEach(index => {
            DomLoader.printChar(letters, char, index);
        });
    } else {
        errorHandler();
    }
    var lettersGuessed = [];
    letters.forEach(char => char.textContent != '' ? lettersGuessed.push(char) : '');
    if (lettersGuessed.length == wordObj.name.replace(/\s/g, '').length) {
        interval.stop();
        showModal('You guessed right!');
    }
}

function startGame() {
    var wordObj = HangMan.getGuessingWord(guessArr);
    var wordName = wordObj.name
    clues.firstClue = wordObj.clues[0];
    clues.secondClue = wordObj.clues[1];
    DomLoader.renderButtons()
    DomLoader.renderLetterContainers(wordName);
    DomLoader.addListenerButtons(wordObj, checkBtn);
    countDown.setTime(50);
    interval.init;
}

startGame();