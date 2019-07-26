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

const printChar = (wordObj, counter, clues, e) => {
  let char = e.target.innerHTML;
  let letters = document.querySelectorAll('.letter');
  let charIndexArr = __WEBPACK_IMPORTED_MODULE_1__modules_hangman__["c" /* getCharacterMatches */](wordObj.name, char);
  e.target.setAttribute('disabled', '');

  if (Array.isArray(charIndexArr)) {
    charIndexArr.forEach(index => {
      letters[index].innerHTML = char;
    });
  } else {
    var failCounter = counter();

    if (failCounter == 2) {
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["b" /* printClues */](clues(), "firstClue");
    } else if (failCounter == 4) {
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["b" /* printClues */](clues(), "secondClue");
    }
  }
};

startGame();

function startGame() {
  var wordObj = __WEBPACK_IMPORTED_MODULE_1__modules_hangman__["d" /* getGuessingWord */](guessArr);
  var wordName = wordObj.name;
  var counter = __WEBPACK_IMPORTED_MODULE_1__modules_hangman__["a" /* countFailures */]();
  var clues = __WEBPACK_IMPORTED_MODULE_1__modules_hangman__["b" /* generateClue */](wordObj);
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["c" /* renderButtons */]();
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["d" /* renderLetterContainers */](wordName);
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["a" /* addListenerButtons */](wordObj, counter, clues, printChar);
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = printClues;
const htmlButton = val => {
  return `<button id="btn-${val}" class="letter-btn">${val}</button>`;
};
/* unused harmony export htmlButton */

const renderButtons = () => {
  let abc = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  let buttons = abc.map(letter => htmlButton(letter)).join('');
  document.querySelector('.keyboard--container').innerHTML = buttons;
};
/* harmony export (immutable) */ __webpack_exports__["c"] = renderButtons;

const htmlLifeIcon = () => {
  return '<div class="life"><i class="fas fa-heart"></i></div>';
};
/* unused harmony export htmlLifeIcon */

const renderLifeIcons = NumOfLifes => {
  let lifes = [];

  for (let i = 0; i < NumOfLifes; i++) {
    lifes.push(htmlLifeIcon());
  }

  return lifes.join('');
};
/* unused harmony export renderLifeIcons */

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
/* harmony export (immutable) */ __webpack_exports__["d"] = renderLetterContainers;

function printClues(clue, id) {
  document.getElementById(id).innerHTML = clue;
}
const addListenerButtons = (word, counter, clues, callback) => {
  let arrBtn = document.querySelectorAll('.letter-btn');
  arrBtn.forEach(btn => btn.addEventListener('click', e => {
    callback(word, counter, clues, e);
  }));
};
/* harmony export (immutable) */ __webpack_exports__["a"] = addListenerButtons;
 // export * from ...;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getCharacterMatches;
/* harmony export (immutable) */ __webpack_exports__["d"] = getGuessingWord;
/* unused harmony export startTimer */
/* harmony export (immutable) */ __webpack_exports__["b"] = generateClue;
/* harmony export (immutable) */ __webpack_exports__["a"] = countFailures;
function getCharacterMatches(word, char) {
  word = word.replace(/\s/g, '');
  var indices = [];

  for (var i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() == char.toLowerCase()) indices.push(i);
  }

  if (indices.length > 0) {
    return indices;
  } else {
    return -1;
  } // try {
  //     indices[0]
  //     return indices
  // } catch (error) {
  //     return -1
  // }

}
function getGuessingWord(arr) {
  var guessIndex = parseInt(Math.random() * arr.length);
  return arr[guessIndex];
}
function startTimer(time) {
  var timer = setTimeout(() => {// game finished logic goes here
  }, time);
  return timer;
}
function generateClue(wordObj) {
  var clueCounter = 0;
  return function () {
    if (clueCounter <= wordObj.clues.length - 1) {
      return wordObj.clues[clueCounter++];
    } else {
      return "No more clues :(";
    }
  };
}
function countFailures() {
  var failures = 0;
  return function () {
    return failures += 1;
  };
}

/***/ })
/******/ ]);