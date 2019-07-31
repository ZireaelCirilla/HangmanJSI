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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = printClues;
/* harmony export (immutable) */ __webpack_exports__["j"] = showModalReset;
/* harmony export (immutable) */ __webpack_exports__["c"] = hideModal;
const htmlButton = val => {
  return `<button id="btn-${val}" class="letter-btn">${val}</button>`;
};
/* unused harmony export htmlButton */

const renderButtons = () => {
  let abc = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  let buttons = abc.map(letter => htmlButton(letter)).join('');
  document.querySelector('.keyboard--container').innerHTML = buttons;
};
/* harmony export (immutable) */ __webpack_exports__["h"] = renderButtons;

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
/* harmony export (immutable) */ __webpack_exports__["i"] = renderLetterContainers;

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
/* harmony export (immutable) */ __webpack_exports__["d"] = printChar;

const printImg = imgUrl => {
  document.getElementById('hangman-img').style.backgroundImage = `url(${imgUrl})`;
};
/* harmony export (immutable) */ __webpack_exports__["f"] = printImg;

const queryLetter = () => {
  return document.querySelectorAll('.letter');
};
/* harmony export (immutable) */ __webpack_exports__["g"] = queryLetter;

function showModalReset(title = "Game Over") {
  hideModal();
  document.getElementById('reset-container').style.display = 'block';
  document.getElementById('modal--content').innerHTML = title;
}
function hideModal() {
  let containers = document.querySelectorAll('.modal-container');
  containers.forEach(element => element.style.display = 'none');
}
const showModalSearch = () => {
  hideModal();
  document.getElementById('search-container').style.display = 'block';
};
/* harmony export (immutable) */ __webpack_exports__["k"] = showModalSearch;

const clearGameInterface = () => {
  document.querySelectorAll('.clues').forEach(element => element.innerHTML = '');
  printImg('/images/horca.png');
};
/* harmony export (immutable) */ __webpack_exports__["b"] = clearGameInterface;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return guessArr; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__ = __webpack_require__(0);

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
    Object(__WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["j" /* showModalReset */])();
  }

};
/* harmony export (immutable) */ __webpack_exports__["b"] = countDown;

const intAction = () => {
  countDown.time <= 0 ? countDown.finish() : '';
  countDown.printTime();
  countDown.count();
};
/* unused harmony export intAction */

const interval = {
  init: setInterval(intAction, 1000),

  stop() {
    clearInterval(this.init);
  },

  reset() {
    this.init = setInterval(intAction, 1000);
  }

};
/* harmony export (immutable) */ __webpack_exports__["e"] = interval;

const fails = {
  total: 0,

  sum() {
    this.total++;
  }

};
/* harmony export (immutable) */ __webpack_exports__["c"] = fails;

const clues = {
  firstClue: '',
  secondClue: ''
};
/* harmony export (immutable) */ __webpack_exports__["a"] = clues;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_hangman__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_request_service__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__ = __webpack_require__(1);





const errorHandler = () => {
  __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["c" /* fails */].sum();
  let currentTime = __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["b" /* countDown */].time;
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["f" /* printImg */](`/images/${__WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["c" /* fails */].total}.png`);

  switch (__WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["c" /* fails */].total) {
    case 2:
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["e" /* printClues */](__WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["a" /* clues */].firstClue, Object.keys(__WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["a" /* clues */])[0]);
      __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["b" /* countDown */].time - 5 <= 0 ? __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["b" /* countDown */].finish(__WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["e" /* interval */]) : __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["b" /* countDown */].setTime(currentTime - 5);
      break;

    case 4:
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["e" /* printClues */](__WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["a" /* clues */].secondClue, Object.keys(__WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["a" /* clues */])[1]);
      __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["b" /* countDown */].time - 5 <= 0 ? __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["b" /* countDown */].finish(__WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["e" /* interval */]) : __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["b" /* countDown */].setTime(currentTime - 5);
      break;

    case 6:
      __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["b" /* countDown */].finish(__WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["e" /* interval */]);
      break;

    default:
      break;
  }
};

const restart = () => {
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["b" /* clearGameInterface */]();
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["c" /* hideModal */]();
  __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["c" /* fails */].total = 0;
  __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["e" /* interval */].stop();
  __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["e" /* interval */].reset();
  startGame();
};

const checkBtn = (wordObj, e) => {
  let char = e.target.innerHTML;
  let charIndexArr = __WEBPACK_IMPORTED_MODULE_1__modules_hangman__["a" /* getCharacterMatches */](wordObj.name, char);
  e.target.setAttribute('disabled', '');

  if (charIndexArr.length > 0) {
    charIndexArr.forEach(index => {
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["d" /* printChar */](char, index);
      __WEBPACK_IMPORTED_MODULE_1__modules_hangman__["c" /* wordGuessed */](wordObj.name);
    });
  } else {
    errorHandler();
  }
};

function startGame() {
  var wordObj = __WEBPACK_IMPORTED_MODULE_1__modules_hangman__["b" /* getGuessingWord */](__WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["d" /* guessArr */]);
  var wordName = wordObj.name;
  __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["a" /* clues */].firstClue = wordObj.clues[0];
  __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["a" /* clues */].secondClue = wordObj.clues[1];
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["h" /* renderButtons */]();
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["i" /* renderLetterContainers */](wordName);
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["a" /* addListenerButtons */](wordObj, '.letter-btn', checkBtn);
  __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["b" /* countDown */].setTime(50);
  __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["e" /* interval */].init;
}

startGame();
__WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["a" /* addListenerButtons */](undefined, '.search-btn', __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["k" /* showModalSearch */]);
document.getElementById('close-modal').addEventListener('click', __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["c" /* hideModal */]);
document.getElementById('search-form').addEventListener('submit', __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* getFilmsArray */]);
document.getElementById('restart').addEventListener('click', restart);
document.getElementById('search-reset').addEventListener('click', () => {
  restart();
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["k" /* showModalSearch */]();
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCharacterMatches;
/* harmony export (immutable) */ __webpack_exports__["b"] = getGuessingWord;
/* harmony export (immutable) */ __webpack_exports__["c"] = wordGuessed;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_global_var_service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_dom_loader__ = __webpack_require__(0);


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
function wordGuessed(name) {
  var letters = __WEBPACK_IMPORTED_MODULE_1__modules_dom_loader__["g" /* queryLetter */]();
  var lettersGuessed = [];
  letters.forEach(char => char.textContent != '' ? lettersGuessed.push(char) : '');

  if (lettersGuessed.length == name.replace(/\s/g, '').length) {
    __WEBPACK_IMPORTED_MODULE_0__services_global_var_service__["e" /* interval */].stop();
    __WEBPACK_IMPORTED_MODULE_1__modules_dom_loader__["j" /* showModalReset */]('You guessed right!');
  }
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const fetchFilms = async search => {
  return await fetch(`http://www.omdbapi.com/?type=movie&s=${search}&apikey=9ee21907`).then(res => res.json()).catch(e => console.error('Error: ' + e));
};
/* unused harmony export fetchFilms */

const fetchId = async id => {
  return await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=9ee21907`).then(res => res.json()).catch(e => console.error('Error: ' + e));
};
/* unused harmony export fetchId */

const getFilmsArray = async e => {
  e.preventDefault();
  let movieSearch = e.target[0].value;
  let response = await fetchFilms(movieSearch);
  let films = response.Search.filter((val, i) => i < 5);
  console.log(films);
  return films;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = getFilmsArray;

const getFilmById = async id => {
  let film = await fetchId(id);
  return film;
};
/* unused harmony export getFilmById */


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGRmMTQ0NzhlNjhiOTJhZWJhNzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZG9tLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZ2xvYmFsLXZhci1zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9oYW5nbWFuLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0LXNlcnZpY2UuanMiXSwibmFtZXMiOlsiaHRtbEJ1dHRvbiIsInZhbCIsInJlbmRlckJ1dHRvbnMiLCJhYmMiLCJzcGxpdCIsImJ1dHRvbnMiLCJtYXAiLCJsZXR0ZXIiLCJqb2luIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiaHRtbExldHRlckNvbnRhaW5lciIsInNwYWNlIiwiaHRtbExldHRlciIsInJlbmRlckxldHRlckNvbnRhaW5lcnMiLCJ0aXRsZUZpbG0iLCJ0aXRsZUFyciIsImxldHRlcnMiLCJwcmludENsdWVzIiwiY2x1ZSIsImlkIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRMaXN0ZW5lckJ1dHRvbnMiLCJ3b3JkIiwiY2xhc3NCdG4iLCJjYWxsYmFjayIsImFyckJ0biIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmludENoYXIiLCJjaGFyIiwiaW5kZXgiLCJxdWVyeUxldHRlciIsInByaW50SW1nIiwiaW1nVXJsIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzaG93TW9kYWxSZXNldCIsInRpdGxlIiwiaGlkZU1vZGFsIiwiZGlzcGxheSIsImNvbnRhaW5lcnMiLCJlbGVtZW50Iiwic2hvd01vZGFsU2VhcmNoIiwiY2xlYXJHYW1lSW50ZXJmYWNlIiwiZ3Vlc3NBcnIiLCJuYW1lIiwiY2x1ZXMiLCJjb3VudERvd24iLCJ0aW1lIiwiY291bnQiLCJwcmludFRpbWUiLCJzZXRUaW1lIiwibmV3VGltZSIsImZpbmlzaCIsImludGVydmFsIiwic3RvcCIsImludEFjdGlvbiIsImluaXQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJyZXNldCIsImZhaWxzIiwidG90YWwiLCJzdW0iLCJmaXJzdENsdWUiLCJzZWNvbmRDbHVlIiwiZXJyb3JIYW5kbGVyIiwiR2xvYmFsVmFyIiwiY3VycmVudFRpbWUiLCJEb21Mb2FkZXIiLCJPYmplY3QiLCJrZXlzIiwicmVzdGFydCIsInN0YXJ0R2FtZSIsImNoZWNrQnRuIiwid29yZE9iaiIsInRhcmdldCIsImNoYXJJbmRleEFyciIsIkhhbmdNYW4iLCJzZXRBdHRyaWJ1dGUiLCJsZW5ndGgiLCJ3b3JkTmFtZSIsInVuZGVmaW5lZCIsIlJlcXVlc3QiLCJnZXRDaGFyYWN0ZXJNYXRjaGVzIiwicmVwbGFjZSIsImluZGljZXMiLCJpIiwidG9Mb3dlckNhc2UiLCJwdXNoIiwiZ2V0R3Vlc3NpbmdXb3JkIiwiYXJyIiwiZ3Vlc3NJbmRleCIsInBhcnNlSW50IiwiTWF0aCIsInJhbmRvbSIsIndvcmRHdWVzc2VkIiwibGV0dGVyc0d1ZXNzZWQiLCJ0ZXh0Q29udGVudCIsImZldGNoRmlsbXMiLCJzZWFyY2giLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiLCJmZXRjaElkIiwiZ2V0RmlsbXNBcnJheSIsInByZXZlbnREZWZhdWx0IiwibW92aWVTZWFyY2giLCJ2YWx1ZSIsInJlc3BvbnNlIiwiZmlsbXMiLCJTZWFyY2giLCJmaWx0ZXIiLCJsb2ciLCJnZXRGaWxtQnlJZCIsImZpbG0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM1REE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsVUFBVSxHQUFJQyxHQUFELElBQVM7QUFDL0IsU0FBUSxtQkFBa0JBLEdBQUksd0JBQXVCQSxHQUFJLFdBQXpEO0FBQ0gsQ0FGTTtBQUFBO0FBQUE7QUFJQSxNQUFNQyxhQUFhLEdBQUcsTUFBTTtBQUMvQixNQUFJQyxHQUFHLEdBQUcsOEJBQThCQyxLQUE5QixDQUFvQyxFQUFwQyxDQUFWO0FBQ0EsTUFBSUMsT0FBTyxHQUFHRixHQUFHLENBQUNHLEdBQUosQ0FBUUMsTUFBTSxJQUFJUCxVQUFVLENBQUNPLE1BQUQsQ0FBNUIsRUFBc0NDLElBQXRDLENBQTJDLEVBQTNDLENBQWQ7QUFDQUMsVUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixFQUErQ0MsU0FBL0MsR0FBMkROLE9BQTNEO0FBQ0gsQ0FKTTtBQUFBO0FBQUE7QUFNQSxNQUFNTyxtQkFBbUIsR0FBSUwsTUFBRCxJQUFZO0FBQzNDLE1BQUlNLEtBQUssR0FBRyxzQ0FBWjtBQUNBLE1BQUlDLFVBQVUsR0FBSzs7Ozs7S0FBbkI7QUFPQSxTQUFPUCxNQUFNLEtBQUssR0FBWCxHQUFpQk8sVUFBakIsR0FBOEJELEtBQXJDO0FBQ0gsQ0FWTTtBQUFBO0FBQUE7QUFZQSxNQUFNRSxzQkFBc0IsR0FBSUMsU0FBRCxJQUFlO0FBQ2pELE1BQUlDLFFBQVEsR0FBR0QsU0FBUyxDQUFDWixLQUFWLENBQWdCLEVBQWhCLENBQWY7QUFDQSxNQUFJYyxPQUFPLEdBQUdELFFBQVEsQ0FBQ1gsR0FBVCxDQUFhTCxHQUFHLElBQUlXLG1CQUFtQixDQUFDWCxHQUFELENBQXZDLEVBQThDTyxJQUE5QyxDQUFtRCxFQUFuRCxDQUFkO0FBQ0FDLFVBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQ0FBdkIsRUFBMkRDLFNBQTNELEdBQXVFTyxPQUF2RTtBQUVILENBTE07QUFBQTtBQUFBO0FBT0EsU0FBU0MsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEJDLEVBQTFCLEVBQThCO0FBQ2pDWixVQUFRLENBQUNhLGNBQVQsQ0FBd0JELEVBQXhCLEVBQTRCVixTQUE1QixHQUF3Q1MsSUFBeEM7QUFDSDtBQUVNLE1BQU1HLGtCQUFrQixHQUFHLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFpQkMsUUFBakIsS0FBOEI7QUFDNUQsTUFBSUMsTUFBTSxHQUFHbEIsUUFBUSxDQUFDbUIsZ0JBQVQsQ0FBMEJILFFBQTFCLENBQWI7QUFDQUUsUUFBTSxDQUFDRSxPQUFQLENBQWVDLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxnQkFBSixDQUFxQixPQUFyQixFQUErQkMsQ0FBRCxJQUFPO0FBQUVOLFlBQVEsQ0FBQ0YsSUFBRCxFQUFPUSxDQUFQLENBQVI7QUFBbUIsR0FBMUQsQ0FBdEI7QUFDSCxDQUhNO0FBQUE7QUFBQTtBQUtBLE1BQU1DLFNBQVMsR0FBRyxDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FBaUI7QUFDdEMsTUFBSWpCLE9BQU8sR0FBR2tCLFdBQVcsRUFBekI7QUFDQWxCLFNBQU8sQ0FBQ2lCLEtBQUQsQ0FBUCxDQUFleEIsU0FBZixHQUEyQnVCLElBQTNCO0FBQ0gsQ0FITTtBQUFBO0FBQUE7QUFLQSxNQUFNRyxRQUFRLEdBQUlDLE1BQUQsSUFBWTtBQUNoQzdCLFVBQVEsQ0FBQ2EsY0FBVCxDQUF3QixhQUF4QixFQUF1Q2lCLEtBQXZDLENBQTZDQyxlQUE3QyxHQUFnRSxPQUFNRixNQUFPLEdBQTdFO0FBQ0gsQ0FGTTtBQUFBO0FBQUE7QUFJQSxNQUFNRixXQUFXLEdBQUcsTUFBTTtBQUM3QixTQUFPM0IsUUFBUSxDQUFDbUIsZ0JBQVQsQ0FBMEIsU0FBMUIsQ0FBUDtBQUNILENBRk07QUFBQTtBQUFBO0FBSUEsU0FBU2EsY0FBVCxDQUF3QkMsS0FBSyxHQUFHLFdBQWhDLEVBQTZDO0FBQ2hEQyxXQUFTO0FBQ1RsQyxVQUFRLENBQUNhLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDaUIsS0FBM0MsQ0FBaURLLE9BQWpELEdBQTJELE9BQTNEO0FBQ0FuQyxVQUFRLENBQUNhLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDWCxTQUExQyxHQUFzRCtCLEtBQXREO0FBQ0g7QUFFTSxTQUFTQyxTQUFULEdBQXFCO0FBQ3hCLE1BQUlFLFVBQVUsR0FBR3BDLFFBQVEsQ0FBQ21CLGdCQUFULENBQTBCLGtCQUExQixDQUFqQjtBQUNBaUIsWUFBVSxDQUFDaEIsT0FBWCxDQUFtQmlCLE9BQU8sSUFBSUEsT0FBTyxDQUFDUCxLQUFSLENBQWNLLE9BQWQsR0FBd0IsTUFBdEQ7QUFDSDtBQUVNLE1BQU1HLGVBQWUsR0FBRyxNQUFNO0FBQ2pDSixXQUFTO0FBQ1RsQyxVQUFRLENBQUNhLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDaUIsS0FBNUMsQ0FBa0RLLE9BQWxELEdBQTRELE9BQTVEO0FBQ0gsQ0FITTtBQUFBO0FBQUE7QUFLQSxNQUFNSSxrQkFBa0IsR0FBRyxNQUFNO0FBQ3BDdkMsVUFBUSxDQUFDbUIsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NDLE9BQXBDLENBQTRDaUIsT0FBTyxJQUFJQSxPQUFPLENBQUNuQyxTQUFSLEdBQW9CLEVBQTNFO0FBQ0EwQixVQUFRLENBQUMsbUJBQUQsQ0FBUjtBQUNILENBSE0sQzs7Ozs7Ozs7O0FDcEVQO0FBQUE7QUFBQTtBQUVPLElBQUlZLFFBQVEsR0FBRyxDQUFDO0FBQ25CQyxNQUFJLEVBQUUsZ0JBRGE7QUFFbkJDLE9BQUssRUFBRSxDQUFDLGVBQUQsRUFBa0Isb0JBQWxCO0FBRlksQ0FBRCxFQUduQjtBQUNDRCxNQUFJLEVBQUUsVUFEUDtBQUVDQyxPQUFLLEVBQUUsQ0FBQyxTQUFELEVBQVkscUJBQVo7QUFGUixDQUhtQixFQU90QjtBQUNJRCxNQUFJLEVBQUUsT0FEVjtBQUVJQyxPQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWDtBQUZYLENBUHNCLEVBV3RCO0FBQ0lELE1BQUksRUFBRSxVQURWO0FBRUlDLE9BQUssRUFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaO0FBRlgsQ0FYc0IsRUFldEI7QUFDSUQsTUFBSSxFQUFFLFVBRFY7QUFFSUMsT0FBSyxFQUFFLENBQUMsbUJBQUQsRUFBc0IsZUFBdEI7QUFGWCxDQWZzQixFQW1CdEI7QUFDSUQsTUFBSSxFQUFFLGFBRFY7QUFFSUMsT0FBSyxFQUFFLENBQUMsYUFBRCxFQUFnQixlQUFoQjtBQUZYLENBbkJzQixDQUFmO0FBeUJBLE1BQU1DLFNBQVMsR0FBRztBQUNyQkMsTUFBSSxFQUFFLENBRGU7O0FBRXJCQyxPQUFLLEdBQUc7QUFDSixXQUFPLEtBQUtELElBQUwsRUFBUDtBQUNILEdBSm9COztBQUtyQkUsV0FBUyxHQUFHO0FBQ1I5QyxZQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUNDLFNBQWpDLEdBQTZDLEtBQUswQyxJQUFsRDtBQUNILEdBUG9COztBQVFyQkcsU0FBTyxDQUFDQyxPQUFELEVBQVU7QUFDYixTQUFLSixJQUFMLEdBQVlJLE9BQVo7QUFDSCxHQVZvQjs7QUFXckJDLFFBQU0sR0FBRztBQUNMQyxZQUFRLENBQUNDLElBQVQ7QUFDQW5CLHVGQUFjO0FBQ2pCOztBQWRvQixDQUFsQjtBQUFBO0FBQUE7QUFpQkEsTUFBTW9CLFNBQVMsR0FBRyxNQUFNO0FBQzNCVCxXQUFTLENBQUNDLElBQVYsSUFBa0IsQ0FBbEIsR0FBc0JELFNBQVMsQ0FBQ00sTUFBVixFQUF0QixHQUEyQyxFQUEzQztBQUNBTixXQUFTLENBQUNHLFNBQVY7QUFDQUgsV0FBUyxDQUFDRSxLQUFWO0FBQ0gsQ0FKTTtBQUFBO0FBQUE7QUFNQSxNQUFNSyxRQUFRLEdBQUc7QUFDcEJHLE1BQUksRUFBRUMsV0FBVyxDQUFDRixTQUFELEVBQVksSUFBWixDQURHOztBQUVwQkQsTUFBSSxHQUFHO0FBQ0hJLGlCQUFhLENBQUMsS0FBS0YsSUFBTixDQUFiO0FBQ0gsR0FKbUI7O0FBS3BCRyxPQUFLLEdBQUc7QUFDSixTQUFLSCxJQUFMLEdBQVlDLFdBQVcsQ0FBQ0YsU0FBRCxFQUFZLElBQVosQ0FBdkI7QUFDSDs7QUFQbUIsQ0FBakI7QUFBQTtBQUFBO0FBVUEsTUFBTUssS0FBSyxHQUFHO0FBQ2pCQyxPQUFLLEVBQUUsQ0FEVTs7QUFFakJDLEtBQUcsR0FBRztBQUNGLFNBQUtELEtBQUw7QUFDSDs7QUFKZ0IsQ0FBZDtBQUFBO0FBQUE7QUFPQSxNQUFNaEIsS0FBSyxHQUFHO0FBQ2pCa0IsV0FBUyxFQUFFLEVBRE07QUFFakJDLFlBQVUsRUFBRTtBQUZLLENBQWQsQzs7Ozs7Ozs7O0FDbkVQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsTUFBTTtBQUN2QkMsNkVBQUEsQ0FBZ0JKLEdBQWhCO0FBQ0EsTUFBSUssV0FBVyxHQUFHRCwrRUFBQSxDQUFvQm5CLElBQXRDO0FBQ0FxQix1RUFBQSxDQUFvQixXQUFVRiwyRUFBQSxDQUFnQkwsS0FBTSxNQUFwRDs7QUFDQSxVQUFRSywyRUFBQSxDQUFnQkwsS0FBeEI7QUFDSSxTQUFLLENBQUw7QUFDSU8sNkVBQUEsQ0FBcUJGLDJFQUFBLENBQWdCSCxTQUFyQyxFQUFnRE0sTUFBTSxDQUFDQyxJQUFQLENBQVlKLDJFQUFaLEVBQTZCLENBQTdCLENBQWhEO0FBQ0FBLHFGQUFBLENBQW9CbkIsSUFBcEIsR0FBMkIsQ0FBM0IsSUFBZ0MsQ0FBaEMsR0FBb0NtQiwrRUFBQSxDQUFvQmQsTUFBcEIsQ0FBMkJjLDhFQUEzQixDQUFwQyxHQUFxRkEsK0VBQUEsQ0FBb0JoQixPQUFwQixDQUE2QmlCLFdBQVcsR0FBRyxDQUEzQyxDQUFyRjtBQUNBOztBQUNKLFNBQUssQ0FBTDtBQUNJQyw2RUFBQSxDQUFxQkYsMkVBQUEsQ0FBZ0JGLFVBQXJDLEVBQWlESyxNQUFNLENBQUNDLElBQVAsQ0FBWUosMkVBQVosRUFBNkIsQ0FBN0IsQ0FBakQ7QUFDQUEscUZBQUEsQ0FBb0JuQixJQUFwQixHQUEyQixDQUEzQixJQUFnQyxDQUFoQyxHQUFvQ21CLCtFQUFBLENBQW9CZCxNQUFwQixDQUEyQmMsOEVBQTNCLENBQXBDLEdBQXFGQSwrRUFBQSxDQUFvQmhCLE9BQXBCLENBQTZCaUIsV0FBVyxHQUFHLENBQTNDLENBQXJGO0FBQ0E7O0FBQ0osU0FBSyxDQUFMO0FBQ0lELHFGQUFBLENBQW9CZCxNQUFwQixDQUEyQmMsOEVBQTNCO0FBQ0E7O0FBQ0o7QUFDSTtBQWJSO0FBZUgsQ0FuQkQ7O0FBcUJBLE1BQU1LLE9BQU8sR0FBRyxNQUFNO0FBQ2xCSCxpRkFBQTtBQUNBQSx3RUFBQTtBQUNBRiw2RUFBQSxDQUFnQkwsS0FBaEIsR0FBd0IsQ0FBeEI7QUFDQUssZ0ZBQUEsQ0FBbUJaLElBQW5CO0FBQ0FZLGdGQUFBLENBQW1CUCxLQUFuQjtBQUNBYSxXQUFTO0FBQ1osQ0FQRDs7QUFTQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQ0MsT0FBRCxFQUFVaEQsQ0FBVixLQUFnQjtBQUM3QixNQUFJRSxJQUFJLEdBQUdGLENBQUMsQ0FBQ2lELE1BQUYsQ0FBU3RFLFNBQXBCO0FBQ0EsTUFBSXVFLFlBQVksR0FBR0MsNkVBQUEsQ0FBNEJILE9BQU8sQ0FBQzlCLElBQXBDLEVBQTBDaEIsSUFBMUMsQ0FBbkI7QUFDQUYsR0FBQyxDQUFDaUQsTUFBRixDQUFTRyxZQUFULENBQXNCLFVBQXRCLEVBQWtDLEVBQWxDOztBQUNBLE1BQUlGLFlBQVksQ0FBQ0csTUFBYixHQUFzQixDQUExQixFQUE2QjtBQUN6QkgsZ0JBQVksQ0FBQ3JELE9BQWIsQ0FBcUJNLEtBQUssSUFBSTtBQUMxQnVDLDRFQUFBLENBQW9CeEMsSUFBcEIsRUFBMEJDLEtBQTFCO0FBQ0FnRCwyRUFBQSxDQUFvQkgsT0FBTyxDQUFDOUIsSUFBNUI7QUFDSCxLQUhEO0FBSUgsR0FMRCxNQUtPO0FBQ0hxQixnQkFBWTtBQUNmO0FBQ0osQ0FaRDs7QUFjQSxTQUFTTyxTQUFULEdBQXFCO0FBQ2pCLE1BQUlFLE9BQU8sR0FBR0cseUVBQUEsQ0FBd0JYLDhFQUF4QixDQUFkO0FBQ0EsTUFBSWMsUUFBUSxHQUFHTixPQUFPLENBQUM5QixJQUF2QjtBQUNBc0IsNkVBQUEsQ0FBZ0JILFNBQWhCLEdBQTRCVyxPQUFPLENBQUM3QixLQUFSLENBQWMsQ0FBZCxDQUE1QjtBQUNBcUIsNkVBQUEsQ0FBZ0JGLFVBQWhCLEdBQTZCVSxPQUFPLENBQUM3QixLQUFSLENBQWMsQ0FBZCxDQUE3QjtBQUNBdUIsNEVBQUE7QUFDQUEscUZBQUEsQ0FBaUNZLFFBQWpDO0FBQ0FaLGlGQUFBLENBQTZCTSxPQUE3QixFQUFzQyxhQUF0QyxFQUFxREQsUUFBckQ7QUFDQVAsaUZBQUEsQ0FBb0JoQixPQUFwQixDQUE0QixFQUE1QjtBQUNBZ0IsZ0ZBQUEsQ0FBbUJWLElBQW5CO0FBQ0g7O0FBRURnQixTQUFTO0FBRVRKLCtFQUFBLENBQTZCYSxTQUE3QixFQUF3QyxhQUF4QyxFQUF1RGIsNEVBQXZEO0FBQ0FqRSxRQUFRLENBQUNhLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUNTLGdCQUF2QyxDQUF3RCxPQUF4RCxFQUFpRTJDLHNFQUFqRTtBQUNBakUsUUFBUSxDQUFDYSxjQUFULENBQXdCLGFBQXhCLEVBQXVDUyxnQkFBdkMsQ0FBd0QsUUFBeEQsRUFBa0V5RCxnRkFBbEU7QUFDQS9FLFFBQVEsQ0FBQ2EsY0FBVCxDQUF3QixTQUF4QixFQUFtQ1MsZ0JBQW5DLENBQW9ELE9BQXBELEVBQTZEOEMsT0FBN0Q7QUFDQXBFLFFBQVEsQ0FBQ2EsY0FBVCxDQUF3QixjQUF4QixFQUF3Q1MsZ0JBQXhDLENBQXlELE9BQXpELEVBQWtFLE1BQU07QUFDcEU4QyxTQUFPO0FBQ1BILDhFQUFBO0FBQ0gsQ0FIRCxFOzs7Ozs7O0FDbkVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sU0FBU2UsbUJBQVQsQ0FBNkJqRSxJQUE3QixFQUFtQ1UsSUFBbkMsRUFBeUM7QUFDNUNWLE1BQUksR0FBR0EsSUFBSSxDQUFDa0UsT0FBTCxDQUFhLEtBQWIsRUFBb0IsRUFBcEIsQ0FBUDtBQUNBLE1BQUlDLE9BQU8sR0FBRyxFQUFkOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3BFLElBQUksQ0FBQzZELE1BQXpCLEVBQWlDTyxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFFBQUlwRSxJQUFJLENBQUNvRSxDQUFELENBQUosQ0FBUUMsV0FBUixNQUF5QjNELElBQUksQ0FBQzJELFdBQUwsRUFBN0IsRUFBaURGLE9BQU8sQ0FBQ0csSUFBUixDQUFhRixDQUFiO0FBQ3BEOztBQUNELFNBQU9ELE9BQVA7QUFDSDtBQUVNLFNBQVNJLGVBQVQsQ0FBeUJDLEdBQXpCLEVBQThCO0FBQ2pDLE1BQUlDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0JKLEdBQUcsQ0FBQ1gsTUFBckIsQ0FBekI7QUFDQSxTQUFPVyxHQUFHLENBQUNDLFVBQUQsQ0FBVjtBQUNIO0FBRU0sU0FBU0ksV0FBVCxDQUFxQm5ELElBQXJCLEVBQTJCO0FBQzlCLE1BQUloQyxPQUFPLEdBQUd3RCx3RUFBQSxFQUFkO0FBQ0EsTUFBSTRCLGNBQWMsR0FBRyxFQUFyQjtBQUNBcEYsU0FBTyxDQUFDVyxPQUFSLENBQWdCSyxJQUFJLElBQUlBLElBQUksQ0FBQ3FFLFdBQUwsSUFBb0IsRUFBcEIsR0FBeUJELGNBQWMsQ0FBQ1IsSUFBZixDQUFvQjVELElBQXBCLENBQXpCLEdBQXFELEVBQTdFOztBQUNBLE1BQUlvRSxjQUFjLENBQUNqQixNQUFmLElBQXlCbkMsSUFBSSxDQUFDd0MsT0FBTCxDQUFhLEtBQWIsRUFBb0IsRUFBcEIsRUFBd0JMLE1BQXJELEVBQTZEO0FBQ3pEYixrRkFBQSxDQUFtQlosSUFBbkI7QUFDQWMsK0VBQUEsQ0FBeUIsb0JBQXpCO0FBQ0g7QUFDSixDOzs7Ozs7O0FDekJNLE1BQU04QixVQUFVLEdBQUcsTUFBT0MsTUFBUCxJQUFrQjtBQUN4QyxTQUFPLE1BQU1DLEtBQUssQ0FBRSx3Q0FBdUNELE1BQU8sa0JBQWhELENBQUwsQ0FDUkUsSUFEUSxDQUNIQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQURKLEVBRVJDLEtBRlEsQ0FFRjlFLENBQUMsSUFBSStFLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFlBQVloRixDQUExQixDQUZILENBQWI7QUFHSCxDQUpNO0FBQUE7QUFBQTtBQU1BLE1BQU1pRixPQUFPLEdBQUcsTUFBTzVGLEVBQVAsSUFBYztBQUNqQyxTQUFPLE1BQU1xRixLQUFLLENBQUUsNkJBQTRCckYsRUFBRyw0QkFBakMsQ0FBTCxDQUNSc0YsSUFEUSxDQUNIQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQURKLEVBRVJDLEtBRlEsQ0FFRjlFLENBQUMsSUFBSStFLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFlBQVloRixDQUExQixDQUZILENBQWI7QUFHSCxDQUpNO0FBQUE7QUFBQTtBQU1BLE1BQU1rRixhQUFhLEdBQUcsTUFBT2xGLENBQVAsSUFBYTtBQUN0Q0EsR0FBQyxDQUFDbUYsY0FBRjtBQUNBLE1BQUlDLFdBQVcsR0FBR3BGLENBQUMsQ0FBQ2lELE1BQUYsQ0FBUyxDQUFULEVBQVlvQyxLQUE5QjtBQUNBLE1BQUlDLFFBQVEsR0FBRyxNQUFNZCxVQUFVLENBQUNZLFdBQUQsQ0FBL0I7QUFDQSxNQUFJRyxLQUFLLEdBQUdELFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkMsTUFBaEIsQ0FBdUIsQ0FBQ3hILEdBQUQsRUFBTTJGLENBQU4sS0FBWUEsQ0FBQyxHQUFHLENBQXZDLENBQVo7QUFDQW1CLFNBQU8sQ0FBQ1csR0FBUixDQUFZSCxLQUFaO0FBQ0EsU0FBT0EsS0FBUDtBQUNILENBUE07QUFBQTtBQUFBO0FBU0EsTUFBTUksV0FBVyxHQUFHLE1BQU90RyxFQUFQLElBQWM7QUFDckMsTUFBSXVHLElBQUksR0FBRyxNQUFNWCxPQUFPLENBQUM1RixFQUFELENBQXhCO0FBQ0EsU0FBT3VHLElBQVA7QUFDSCxDQUhNLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGRmMTQ0NzhlNjhiOTJhZWJhNzQiLCJcclxuZXhwb3J0IGNvbnN0IGh0bWxCdXR0b24gPSAodmFsKSA9PiB7XHJcbiAgICByZXR1cm4gYDxidXR0b24gaWQ9XCJidG4tJHt2YWx9XCIgY2xhc3M9XCJsZXR0ZXItYnRuXCI+JHt2YWx9PC9idXR0b24+YDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICBsZXQgYWJjID0gJ0FCQ0RFRkdISUpLTE1Ow5FPUFFSU1RVVldYWVonLnNwbGl0KCcnKTtcclxuICAgIGxldCBidXR0b25zID0gYWJjLm1hcChsZXR0ZXIgPT4gaHRtbEJ1dHRvbihsZXR0ZXIpKS5qb2luKCcnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZC0tY29udGFpbmVyJykuaW5uZXJIVE1MID0gYnV0dG9ucztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGh0bWxMZXR0ZXJDb250YWluZXIgPSAobGV0dGVyKSA9PiB7XHJcbiAgICBsZXQgc3BhY2UgPSAnPGRpdiBjbGFzcz1cImxldHRlci1jb250YWluZXJcIj48L2Rpdj4nO1xyXG4gICAgbGV0IGh0bWxMZXR0ZXIgPSAoYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZXR0ZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXR0ZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVuZGVybGluZVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCk7XHJcblxyXG4gICAgcmV0dXJuIGxldHRlciAhPT0gJyAnID8gaHRtbExldHRlciA6IHNwYWNlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyTGV0dGVyQ29udGFpbmVycyA9ICh0aXRsZUZpbG0pID0+IHtcclxuICAgIGxldCB0aXRsZUFyciA9IHRpdGxlRmlsbS5zcGxpdCgnJyk7XHJcbiAgICBsZXQgbGV0dGVycyA9IHRpdGxlQXJyLm1hcCh2YWwgPT4gaHRtbExldHRlckNvbnRhaW5lcih2YWwpKS5qb2luKCcnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFyYWN0ZXJzLS1jb250YWluZXItLWZ1bGx3b3JkJykuaW5uZXJIVE1MID0gbGV0dGVycztcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmludENsdWVzKGNsdWUsIGlkKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gY2x1ZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkTGlzdGVuZXJCdXR0b25zID0gKHdvcmQsIGNsYXNzQnRuLCBjYWxsYmFjaykgPT4ge1xyXG4gICAgbGV0IGFyckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NCdG4pO1xyXG4gICAgYXJyQnRuLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IGNhbGxiYWNrKHdvcmQsIGUpIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByaW50Q2hhciA9IChjaGFyLCBpbmRleCkgPT4ge1xyXG4gICAgdmFyIGxldHRlcnMgPSBxdWVyeUxldHRlcigpO1xyXG4gICAgbGV0dGVyc1tpbmRleF0uaW5uZXJIVE1MID0gY2hhcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByaW50SW1nID0gKGltZ1VybCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbmdtYW4taW1nJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltZ1VybH0pYDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5TGV0dGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sZXR0ZXInKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNb2RhbFJlc2V0KHRpdGxlID0gXCJHYW1lIE92ZXJcIikge1xyXG4gICAgaGlkZU1vZGFsKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXQtY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtLWNvbnRlbnQnKS5pbm5lckhUTUwgPSB0aXRsZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVNb2RhbCgpIHtcclxuICAgIGxldCBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWNvbnRhaW5lcicpO1xyXG4gICAgY29udGFpbmVycy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dNb2RhbFNlYXJjaCA9ICgpID0+IHtcclxuICAgIGhpZGVNb2RhbCgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFyR2FtZUludGVyZmFjZSA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbHVlcycpLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmlubmVySFRNTCA9ICcnKTtcclxuICAgIHByaW50SW1nKCcvaW1hZ2VzL2hvcmNhLnBuZycpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvZG9tLWxvYWRlci5qcyIsImltcG9ydCB7IHNob3dNb2RhbFJlc2V0IH0gZnJvbSAnLi4vbW9kdWxlcy9kb20tbG9hZGVyJ1xyXG5cclxuZXhwb3J0IHZhciBndWVzc0FyciA9IFt7XHJcbiAgICBuYW1lOiBcIkxvcyBWZW5nYWRvcmVzXCIsXHJcbiAgICBjbHVlczogW1wiU29uIHVuIGVxdWlwb1wiLCBcIlByb3RlamVuIGxhIHRpZXJyYVwiXVxyXG59LCB7XHJcbiAgICBuYW1lOiBcIklyb24gTWFuXCIsXHJcbiAgICBjbHVlczogW1wiRXMgcm9qb1wiLCBcIlBhcmVjZSBoZWNobyBkZSBvcm9cIl1cclxufSxcclxue1xyXG4gICAgbmFtZTogXCJTdWxseVwiLFxyXG4gICAgY2x1ZXM6IFtcIkh1ZHNvblwiLCBcIk15IEFpcmNyYWZ0XCJdXHJcbn0sXHJcbntcclxuICAgIG5hbWU6IFwiRGVhZFBvb2xcIixcclxuICAgIGNsdWVzOiBbXCJQaXNjaW5hXCIsIFwiUm9qYVwiXVxyXG59LFxyXG57XHJcbiAgICBuYW1lOiBcIlRlcm1pbmFsXCIsXHJcbiAgICBjbHVlczogW1wiRGVzZW8gZGUgdW4gcGFkcmVcIiwgXCJIaWpvIGVqZW1wbGFyXCJdXHJcbn0sXHJcbntcclxuICAgIG5hbWU6IFwiRWwgUmV5IExlb25cIixcclxuICAgIGNsdWVzOiBbXCJMaXZlIEFjdGlvblwiLCBcIkhha3VuYS1NYXRhdGFcIl1cclxufSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb3VudERvd24gPSB7XHJcbiAgICB0aW1lOiAwLFxyXG4gICAgY291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZS0tO1xyXG4gICAgfSxcclxuICAgIHByaW50VGltZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGltZXInKS5pbm5lckhUTUwgPSB0aGlzLnRpbWU7XHJcbiAgICB9LFxyXG4gICAgc2V0VGltZShuZXdUaW1lKSB7XHJcbiAgICAgICAgdGhpcy50aW1lID0gbmV3VGltZTtcclxuICAgIH0sXHJcbiAgICBmaW5pc2goKSB7XHJcbiAgICAgICAgaW50ZXJ2YWwuc3RvcCgpO1xyXG4gICAgICAgIHNob3dNb2RhbFJlc2V0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbnRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBjb3VudERvd24udGltZSA8PSAwID8gY291bnREb3duLmZpbmlzaCgpIDogJyc7XHJcbiAgICBjb3VudERvd24ucHJpbnRUaW1lKCk7XHJcbiAgICBjb3VudERvd24uY291bnQoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGludGVydmFsID0ge1xyXG4gICAgaW5pdDogc2V0SW50ZXJ2YWwoaW50QWN0aW9uLCAxMDAwKSxcclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmluaXQpO1xyXG4gICAgfSxcclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCA9IHNldEludGVydmFsKGludEFjdGlvbiwgMTAwMCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFpbHMgPSB7XHJcbiAgICB0b3RhbDogMCxcclxuICAgIHN1bSgpIHtcclxuICAgICAgICB0aGlzLnRvdGFsKys7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjbHVlcyA9IHtcclxuICAgIGZpcnN0Q2x1ZTogJycsXHJcbiAgICBzZWNvbmRDbHVlOiAnJ1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL2dsb2JhbC12YXItc2VydmljZS5qcyIsImltcG9ydCAqIGFzIERvbUxvYWRlciBmcm9tICcuL21vZHVsZXMvZG9tLWxvYWRlcic7XHJcbmltcG9ydCAqIGFzIEhhbmdNYW4gZnJvbSAnLi9tb2R1bGVzL2hhbmdtYW4nO1xyXG5pbXBvcnQgKiBhcyBSZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC1zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgR2xvYmFsVmFyIGZyb20gJy4vc2VydmljZXMvZ2xvYmFsLXZhci1zZXJ2aWNlJztcclxuXHJcbmNvbnN0IGVycm9ySGFuZGxlciA9ICgpID0+IHtcclxuICAgIEdsb2JhbFZhci5mYWlscy5zdW0oKTtcclxuICAgIGxldCBjdXJyZW50VGltZSA9IEdsb2JhbFZhci5jb3VudERvd24udGltZTtcclxuICAgIERvbUxvYWRlci5wcmludEltZyhgL2ltYWdlcy8ke0dsb2JhbFZhci5mYWlscy50b3RhbH0ucG5nYCk7XHJcbiAgICBzd2l0Y2ggKEdsb2JhbFZhci5mYWlscy50b3RhbCkge1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgRG9tTG9hZGVyLnByaW50Q2x1ZXMoR2xvYmFsVmFyLmNsdWVzLmZpcnN0Q2x1ZSwgT2JqZWN0LmtleXMoR2xvYmFsVmFyLmNsdWVzKVswXSk7XHJcbiAgICAgICAgICAgIEdsb2JhbFZhci5jb3VudERvd24udGltZSAtIDUgPD0gMCA/IEdsb2JhbFZhci5jb3VudERvd24uZmluaXNoKEdsb2JhbFZhci5pbnRlcnZhbCkgOiBHbG9iYWxWYXIuY291bnREb3duLnNldFRpbWUoKGN1cnJlbnRUaW1lIC0gNSkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIERvbUxvYWRlci5wcmludENsdWVzKEdsb2JhbFZhci5jbHVlcy5zZWNvbmRDbHVlLCBPYmplY3Qua2V5cyhHbG9iYWxWYXIuY2x1ZXMpWzFdKTtcclxuICAgICAgICAgICAgR2xvYmFsVmFyLmNvdW50RG93bi50aW1lIC0gNSA8PSAwID8gR2xvYmFsVmFyLmNvdW50RG93bi5maW5pc2goR2xvYmFsVmFyLmludGVydmFsKSA6IEdsb2JhbFZhci5jb3VudERvd24uc2V0VGltZSgoY3VycmVudFRpbWUgLSA1KSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgR2xvYmFsVmFyLmNvdW50RG93bi5maW5pc2goR2xvYmFsVmFyLmludGVydmFsKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlc3RhcnQgPSAoKSA9PiB7XHJcbiAgICBEb21Mb2FkZXIuY2xlYXJHYW1lSW50ZXJmYWNlKCk7XHJcbiAgICBEb21Mb2FkZXIuaGlkZU1vZGFsKCk7XHJcbiAgICBHbG9iYWxWYXIuZmFpbHMudG90YWwgPSAwO1xyXG4gICAgR2xvYmFsVmFyLmludGVydmFsLnN0b3AoKTtcclxuICAgIEdsb2JhbFZhci5pbnRlcnZhbC5yZXNldCgpO1xyXG4gICAgc3RhcnRHYW1lKCk7XHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrQnRuID0gKHdvcmRPYmosIGUpID0+IHtcclxuICAgIGxldCBjaGFyID0gZS50YXJnZXQuaW5uZXJIVE1MO1xyXG4gICAgbGV0IGNoYXJJbmRleEFyciA9IEhhbmdNYW4uZ2V0Q2hhcmFjdGVyTWF0Y2hlcyh3b3JkT2JqLm5hbWUsIGNoYXIpO1xyXG4gICAgZS50YXJnZXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcclxuICAgIGlmIChjaGFySW5kZXhBcnIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNoYXJJbmRleEFyci5mb3JFYWNoKGluZGV4ID0+IHtcclxuICAgICAgICAgICAgRG9tTG9hZGVyLnByaW50Q2hhcihjaGFyLCBpbmRleCk7XHJcbiAgICAgICAgICAgIEhhbmdNYW4ud29yZEd1ZXNzZWQod29yZE9iai5uYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXJyb3JIYW5kbGVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICAgIHZhciB3b3JkT2JqID0gSGFuZ01hbi5nZXRHdWVzc2luZ1dvcmQoR2xvYmFsVmFyLmd1ZXNzQXJyKTtcclxuICAgIHZhciB3b3JkTmFtZSA9IHdvcmRPYmoubmFtZVxyXG4gICAgR2xvYmFsVmFyLmNsdWVzLmZpcnN0Q2x1ZSA9IHdvcmRPYmouY2x1ZXNbMF07XHJcbiAgICBHbG9iYWxWYXIuY2x1ZXMuc2Vjb25kQ2x1ZSA9IHdvcmRPYmouY2x1ZXNbMV07XHJcbiAgICBEb21Mb2FkZXIucmVuZGVyQnV0dG9ucygpXHJcbiAgICBEb21Mb2FkZXIucmVuZGVyTGV0dGVyQ29udGFpbmVycyh3b3JkTmFtZSk7XHJcbiAgICBEb21Mb2FkZXIuYWRkTGlzdGVuZXJCdXR0b25zKHdvcmRPYmosICcubGV0dGVyLWJ0bicsIGNoZWNrQnRuKTtcclxuICAgIEdsb2JhbFZhci5jb3VudERvd24uc2V0VGltZSg1MCk7XHJcbiAgICBHbG9iYWxWYXIuaW50ZXJ2YWwuaW5pdDtcclxufVxyXG5cclxuc3RhcnRHYW1lKCk7XHJcblxyXG5Eb21Mb2FkZXIuYWRkTGlzdGVuZXJCdXR0b25zKHVuZGVmaW5lZCwgJy5zZWFyY2gtYnRuJywgRG9tTG9hZGVyLnNob3dNb2RhbFNlYXJjaCk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1tb2RhbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRG9tTG9hZGVyLmhpZGVNb2RhbCk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIFJlcXVlc3QuZ2V0RmlsbXNBcnJheSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0KTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1yZXNldCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVzdGFydCgpO1xyXG4gICAgRG9tTG9hZGVyLnNob3dNb2RhbFNlYXJjaCgpO1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgKiBhcyBHbG9iYWxWYXIgZnJvbSAnLi4vc2VydmljZXMvZ2xvYmFsLXZhci1zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgRG9tTG9hZGVyIGZyb20gJy4uL21vZHVsZXMvZG9tLWxvYWRlcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhcmFjdGVyTWF0Y2hlcyh3b3JkLCBjaGFyKSB7XHJcbiAgICB3b3JkID0gd29yZC5yZXBsYWNlKC9cXHMvZywgJycpO1xyXG4gICAgdmFyIGluZGljZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd29yZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh3b3JkW2ldLnRvTG93ZXJDYXNlKCkgPT0gY2hhci50b0xvd2VyQ2FzZSgpKSBpbmRpY2VzLnB1c2goaSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW5kaWNlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEd1ZXNzaW5nV29yZChhcnIpIHtcclxuICAgIHZhciBndWVzc0luZGV4ID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXHJcbiAgICByZXR1cm4gYXJyW2d1ZXNzSW5kZXhdXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3b3JkR3Vlc3NlZChuYW1lKSB7XHJcbiAgICB2YXIgbGV0dGVycyA9IERvbUxvYWRlci5xdWVyeUxldHRlcigpXHJcbiAgICB2YXIgbGV0dGVyc0d1ZXNzZWQgPSBbXTtcclxuICAgIGxldHRlcnMuZm9yRWFjaChjaGFyID0+IGNoYXIudGV4dENvbnRlbnQgIT0gJycgPyBsZXR0ZXJzR3Vlc3NlZC5wdXNoKGNoYXIpIDogJycpO1xyXG4gICAgaWYgKGxldHRlcnNHdWVzc2VkLmxlbmd0aCA9PSBuYW1lLnJlcGxhY2UoL1xccy9nLCAnJykubGVuZ3RoKSB7XHJcbiAgICAgICAgR2xvYmFsVmFyLmludGVydmFsLnN0b3AoKTtcclxuICAgICAgICBEb21Mb2FkZXIuc2hvd01vZGFsUmVzZXQoJ1lvdSBndWVzc2VkIHJpZ2h0IScpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvaGFuZ21hbi5qcyIsImV4cG9ydCBjb25zdCBmZXRjaEZpbG1zID0gYXN5bmMgKHNlYXJjaCkgPT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz90eXBlPW1vdmllJnM9JHtzZWFyY2h9JmFwaWtleT05ZWUyMTkwN2ApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcgKyBlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaElkID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2k9JHtpZH0mcGxvdD1mdWxsJmFwaWtleT05ZWUyMTkwN2ApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcgKyBlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGaWxtc0FycmF5ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBtb3ZpZVNlYXJjaCA9IGUudGFyZ2V0WzBdLnZhbHVlO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hGaWxtcyhtb3ZpZVNlYXJjaCk7XHJcbiAgICBsZXQgZmlsbXMgPSByZXNwb25zZS5TZWFyY2guZmlsdGVyKCh2YWwsIGkpID0+IGkgPCA1KTtcclxuICAgIGNvbnNvbGUubG9nKGZpbG1zKTtcclxuICAgIHJldHVybiBmaWxtcztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZpbG1CeUlkID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBsZXQgZmlsbSA9IGF3YWl0IGZldGNoSWQoaWQpO1xyXG4gICAgcmV0dXJuIGZpbG07XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvcmVxdWVzdC1zZXJ2aWNlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==