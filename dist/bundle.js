/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_hangman__ = __webpack_require__(2);


var guessArr = [{
  name: "Los Vengadores",
  clues: ["Son un equipo", "Protejen la tierra"]
}, {
  name: "Iron Man",
  clues: ["Es rojo", "Parece hecho de oro"]
}, {
  name: "Sully",
  clues: ["Hudson", "My Aircraft"]
}, {
  name: "DeadPool",
  clues: ["Piscina", "Roja"]
}, {
  name: "Terminal",
  clues: ["Deseo de un padre", "Hijo ejemplar"]
}, {
  name: "El Rey Leon",
  clues: ["Live Action", "Hakuna-Matata"]
}];
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

};

const intAction = () => {
  countDown.time <= 0 ? countDown.finish() : '';
  countDown.printTime();
  countDown.count();
};

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

};
const clues = {
  firstClue: '',
  secondClue: ''
};

const errorHandler = () => {
  fails.sum();
  let currentTime = countDown.time;
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["d" /* printImg */](`/images/${fails.total}.png`);

  switch (fails.total) {
    case 2:
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["c" /* printClues */](clues.firstClue, Object.keys(clues)[0]);
      countDown.time - 5 <= 0 ? countDown.finish(interval) : countDown.setTime(currentTime - 5);
      break;

    case 4:
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["c" /* printClues */](clues.secondClue, Object.keys(clues)[1]);
      countDown.time - 5 <= 0 ? countDown.finish(interval) : countDown.setTime(currentTime - 5);
      break;

    case 6:
      countDown.finish(interval);
      break;

    default:
      break;
  }
};

const restart = () => {
  document.querySelectorAll('.clues').forEach(element => element.innerHTML = '');
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["d" /* printImg */]('/images/horca.png');
  hideModal();
  fails.total = 0;
  interval.stop();
  interval.reset();
  startGame();
};

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
};

const checkBtn = (wordObj, e) => {
  let char = e.target.innerHTML;
  let charIndexArr = __WEBPACK_IMPORTED_MODULE_1__modules_hangman__["a" /* getCharacterMatches */](wordObj.name, char);
  e.target.setAttribute('disabled', '');

  if (charIndexArr.length > 0) {
    charIndexArr.forEach(index => {
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["b" /* printChar */](char, index);
      wordGuessed(wordObj.name);
    });
  } else {
    errorHandler();
  }
};

function wordGuessed(name) {
  var letters = __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["e" /* queryLetter */]();
  var lettersGuessed = [];
  letters.forEach(char => char.textContent != '' ? lettersGuessed.push(char) : '');

  if (lettersGuessed.length == name.replace(/\s/g, '').length) {
    interval.stop();
    showModalReset('You guessed right!');
  }
}

function startGame() {
  var wordObj = __WEBPACK_IMPORTED_MODULE_1__modules_hangman__["b" /* getGuessingWord */](guessArr);
  var wordName = wordObj.name;
  clues.firstClue = wordObj.clues[0];
  clues.secondClue = wordObj.clues[1];
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["f" /* renderButtons */]();
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["g" /* renderLetterContainers */](wordName);
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["a" /* addListenerButtons */](wordObj, '.letter-btn', checkBtn);
  countDown.setTime(50);
  interval.init;
}

startGame();
__WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["a" /* addListenerButtons */](undefined, '.search-btn', showModalSearch);
document.getElementById('close-modal').addEventListener('click', hideModal);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = printClues;
const htmlButton = val => {
  return `<button id="btn-${val}" class="letter-btn">${val}</button>`;
};
/* unused harmony export htmlButton */

const renderButtons = () => {
  let abc = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  let buttons = abc.map(letter => htmlButton(letter)).join('');
  document.querySelector('.keyboard--container').innerHTML = buttons;
};
/* harmony export (immutable) */ __webpack_exports__["f"] = renderButtons;

const htmlLetterContainer = letter => {
  let space = '<div class="letter-container"></div>';
  let htmlLetter = `
        <div class="letter-container">
            <div class="letter"></div>
            <div class="underline"></div>
        </div>
    `;
  return letter !== ' ' ? htmlLetter : space;
};
/* unused harmony export htmlLetterContainer */

const renderLetterContainers = titleFilm => {
  let titleArr = titleFilm.split('');
  let letters = titleArr.map(val => htmlLetterContainer(val)).join('');
  document.querySelector('.characters--container--fullword').innerHTML = letters;
};
/* harmony export (immutable) */ __webpack_exports__["g"] = renderLetterContainers;

function printClues(clue, id) {
  document.getElementById(id).innerHTML = clue;
}
const addListenerButtons = (word, classBtn, callback) => {
  let arrBtn = document.querySelectorAll(classBtn);
  arrBtn.forEach(btn => btn.addEventListener('click', e => {
    callback(word, e);
  }));
};
/* harmony export (immutable) */ __webpack_exports__["a"] = addListenerButtons;

const printChar = (char, index) => {
  var letters = queryLetter();
  letters[index].innerHTML = char;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = printChar;

const printImg = imgUrl => {
  document.getElementById('hangman-img').style.backgroundImage = `url(${imgUrl})`;
};
/* harmony export (immutable) */ __webpack_exports__["d"] = printImg;

const queryLetter = () => {
  return document.querySelectorAll('.letter');
};
/* harmony export (immutable) */ __webpack_exports__["e"] = queryLetter;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCharacterMatches;
/* harmony export (immutable) */ __webpack_exports__["b"] = getGuessingWord;
function getCharacterMatches(word, char) {
  word = word.replace(/\s/g, '');
  var indices = [];

  for (var i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() == char.toLowerCase()) indices.push(i);
  }

  return indices;
}
function getGuessingWord(arr) {
  var guessIndex = parseInt(Math.random() * arr.length);
  return arr[guessIndex];
}

/***/ })
/******/ ]);