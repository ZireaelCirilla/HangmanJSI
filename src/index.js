import * as DomLoader from './modules/dom-loader';
import * as HangMan from './modules/hangman';
import * as Request from './modules/request-service';


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
    count() {
        return this.time--;
    },
    printTime() {
        document.querySelector('#timer').innerHTML = this.time;
    },
    setTime(newTime) {
        this.time = newTime;
    },
    finish() {
        interval.stop();
        showModalReset();
    }
}

const intAction = () => {
    countDown.time <= 0 ? countDown.finish() : '';
    countDown.printTime();
    countDown.count();
}

const interval = {
    init: setInterval(intAction, 1000),
    stop() {
        clearInterval(this.init);
    },
    reset() {
        this.init = setInterval(intAction, 1000);
    }
};

const fails = {
    total: 0,
    sum() {
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
    DomLoader.printImg(`/images/${fails.total}.png`);
    switch (fails.total) {
        case 2:
            DomLoader.printClues(clues.firstClue, Object.keys(clues)[0]);
            countDown.time - 5 <= 0 ? countDown.finish(interval) : countDown.setTime((currentTime - 5));
            break;
        case 4:
            DomLoader.printClues(clues.secondClue, Object.keys(clues)[1]);
            countDown.time - 5 <= 0 ? countDown.finish(interval) : countDown.setTime((currentTime - 5));
            break;
        case 6:
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
    interval.stop();
    interval.reset();
    startGame();
}

function showModalReset(title = "Game Over") {
    hideModal();
    document.getElementById('reset-container').style.display = 'block';
    document.getElementById('modal--content').innerHTML = title;
    document.getElementById('restart').addEventListener('click', restart);
    document.getElementById('search-reset').addEventListener('click', () => {
        restart();
        showModalSearch();
    });
}

function hideModal() {
    let containers = document.querySelectorAll('.modal-container');
    containers.forEach(element => element.style.display = 'none');
}

const showModalSearch = () => {
    hideModal();
    document.getElementById('search-container').style.display = 'block';
}

const checkBtn = (wordObj, e) => {
    let char = e.target.innerHTML;
    let charIndexArr = HangMan.getCharacterMatches(wordObj.name, char);
    e.target.setAttribute('disabled', '');
    if (charIndexArr.length > 0) {
        charIndexArr.forEach(index => {
            DomLoader.printChar(char, index);
            wordGuessed(wordObj.name);
        });
    } else {
        errorHandler();
    }
}

function wordGuessed(name) {
    var letters = DomLoader.queryLetter()
    var lettersGuessed = [];
    letters.forEach(char => char.textContent != '' ? lettersGuessed.push(char) : '');
    if (lettersGuessed.length == name.replace(/\s/g, '').length) {
        interval.stop();
        showModalReset('You guessed right!');
    }
}

function startGame() {
    var wordObj = HangMan.getGuessingWord(guessArr);
    var wordName = wordObj.name
    clues.firstClue = wordObj.clues[0];
    clues.secondClue = wordObj.clues[1];
    DomLoader.renderButtons()
    DomLoader.renderLetterContainers(wordName);
    DomLoader.addListenerButtons(wordObj, '.letter-btn',checkBtn);
    countDown.setTime(50);
    interval.init;
}

startGame();

DomLoader.addListenerButtons(undefined, '.search-btn', showModalSearch);
document.getElementById('close-modal').addEventListener('click', hideModal);
document.getElementById('search-form').addEventListener('submit', Request.getFilmsArray);