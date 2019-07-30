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
    showModal();
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

  switch (fails.total) {
    case 1:
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["d" /* printImg */]('/images/head.png');
      break;

    case 2:
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["d" /* printImg */]('/images/body.png');
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["c" /* printClues */](clues.firstClue, Object.keys(clues)[0]);
      countDown.time - 5 <= 0 ? countDown.finish(interval) : countDown.setTime(currentTime - 5);
      break;

    case 3:
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["d" /* printImg */]('/images/left-arm.png');
      break;

    case 4:
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["d" /* printImg */]('/images/right-arm.png');
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["c" /* printClues */](clues.secondClue, Object.keys(clues)[1]);
      countDown.time - 5 <= 0 ? countDown.finish(interval) : countDown.setTime(currentTime - 5);
      break;

    case 5:
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["d" /* printImg */]('/images/left-leg.png');
      break;

    case 6:
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["d" /* printImg */]('/images/right-leg.png');
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
  interval.reset();
  startGame();
};

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
  let charIndexArr = __WEBPACK_IMPORTED_MODULE_1__modules_hangman__["a" /* getCharacterMatches */](wordObj.name, char);
  e.target.setAttribute('disabled', '');

  if (charIndexArr.length > 0) {
    charIndexArr.forEach(index => {
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["b" /* printChar */](letters, char, index);
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
};

function startGame() {
  var wordObj = __WEBPACK_IMPORTED_MODULE_1__modules_hangman__["b" /* getGuessingWord */](guessArr);
  var wordName = wordObj.name;
  clues.firstClue = wordObj.clues[0];
  clues.secondClue = wordObj.clues[1];
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["e" /* renderButtons */]();
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["f" /* renderLetterContainers */](wordName);
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["a" /* addListenerButtons */](wordObj, checkBtn);
  countDown.setTime(50);
  interval.init;
}

startGame();

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
/* harmony export (immutable) */ __webpack_exports__["e"] = renderButtons;

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
/* harmony export (immutable) */ __webpack_exports__["f"] = renderLetterContainers;

function printClues(clue, id) {
  document.getElementById(id).innerHTML = clue;
}
const addListenerButtons = (word, callback) => {
  let arrBtn = document.querySelectorAll('.letter-btn');
  arrBtn.forEach(btn => btn.addEventListener('click', e => {
    callback(word, e);
  }));
};
/* harmony export (immutable) */ __webpack_exports__["a"] = addListenerButtons;

const printChar = (letters, char, index) => {
  letters[index].innerHTML = char;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = printChar;

const printImg = imgUrl => {
  document.getElementById('hangman-img').style.backgroundImage = `url(${imgUrl})`;
};
/* harmony export (immutable) */ __webpack_exports__["d"] = printImg;


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