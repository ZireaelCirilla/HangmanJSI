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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = printClues;
/* harmony export (immutable) */ __webpack_exports__["l"] = showModalReset;
/* harmony export (immutable) */ __webpack_exports__["d"] = hideModal;
const htmlButton = val => {
  return `<button id="btn-${val}" class="letter-btn">${val}</button>`;
};
/* unused harmony export htmlButton */

const renderButtons = () => {
  let abc = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  let buttons = abc.map(letter => htmlButton(letter)).join('');
  document.querySelector('.keyboard--container').innerHTML = buttons;
};
/* harmony export (immutable) */ __webpack_exports__["j"] = renderButtons;

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
/* harmony export (immutable) */ __webpack_exports__["k"] = renderLetterContainers;

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
/* harmony export (immutable) */ __webpack_exports__["f"] = printChar;

const printImg = imgUrl => {
  document.getElementById('hangman-img').style.backgroundImage = `url(${imgUrl})`;
};
/* harmony export (immutable) */ __webpack_exports__["h"] = printImg;

const queryLetter = () => {
  return document.querySelectorAll('.letter');
};
/* harmony export (immutable) */ __webpack_exports__["i"] = queryLetter;

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
/* harmony export (immutable) */ __webpack_exports__["m"] = showModalSearch;

const clearGameInterface = () => {
  document.querySelectorAll('.clues').forEach(element => element.innerHTML = '');
  printImg('/images/horca.png');
};
/* harmony export (immutable) */ __webpack_exports__["b"] = clearGameInterface;

const inputPlaceHolder = error => {
  document.getElementById('search').placeholder = error;
};
/* harmony export (immutable) */ __webpack_exports__["e"] = inputPlaceHolder;

const displayMoviesOnModal = moviesArr => {
  document.querySelector('.modal--search').style.height = '50%';
  document.querySelector('.modal-content').style.display = 'flex';
  document.querySelector('.modal-footer').style.display = 'flex';
  moviesArr.forEach(function (movie, index) {
    if (index == 0) {
      document.getElementById("modal-content--title").innerHTML = movie.Title;
      document.getElementById("modal-content--desc").innerHTML = movie.Year;
      document.getElementById("modal-content--image").style.backgroundImage = `url(${movie.Poster})`;
      document.getElementsByClassName("modal-content")[index].setAttribute("film-id", movie.imdbID);
    } else {
      document.getElementsByClassName("modal-footer--optional--image")[index - 1].style.backgroundImage = `url(${movie.Poster})`;
      document.getElementsByClassName("modal-footer--optional--title")[index - 1].innerHTML = movie.Title;
      document.getElementsByClassName("modal-footer--optional")[index - 1].setAttribute("film-id", movie.imdbID);
    }
  });
};
/* harmony export (immutable) */ __webpack_exports__["c"] = displayMoviesOnModal;

const filmsToPick = () => {
  return document.querySelectorAll('.film');
};
/* unused harmony export filmsToPick */


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export guessArr */
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
const filmOnGame = {
  title: '',
  clues: []
};
/* harmony export (immutable) */ __webpack_exports__["d"] = filmOnGame;

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
    Object(__WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["l" /* showModalReset */])();
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
  init: '',

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__ = __webpack_require__(0);

const fetchFilms = async (search = 'Tom') => {
  return await fetch(`http://www.omdbapi.com/?type=movie&s=${search}&apikey=9ee21907`).then(res => res.json()).catch(e => console.error('Error: ' + e));
};
/* unused harmony export fetchFilms */

const fetchId = async id => {
  return await fetch(`http://www.omdbapi.com/?i=${id}&plot=short&apikey=9ee21907`).then(res => res.json()).catch(e => console.error('Error: ' + e));
};
/* unused harmony export fetchId */

const getFilmsArray = async movie => {
  let response = {};
  movie == '' ? Object(__WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["e" /* inputPlaceHolder */])('Need to write something...') : response = await fetchFilms(movie);

  if (response.Error) {
    console.log(response.Error);
  } else if (response.Search) {
    let films = response.Search.filter((val, i) => i < 5);
    return films;
  }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = getFilmsArray;

const getFilmById = async id => {
  let film = await fetchId(id);
  return film;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = getFilmById;

const postMovieGuessed = async (title, lives, time) => {
  return await fetch(`http://localhost:8080/movies`, {
    method: "POST",
    body: JSON.stringify({
      title: title,
      lives: lives,
      time: time
    })
  }).then(res => res.json()).catch(e => console.error('Error: ' + e));
};
/* harmony export (immutable) */ __webpack_exports__["c"] = postMovieGuessed;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_hangman__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_request_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__ = __webpack_require__(1);





const errorHandler = () => {
  __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["c" /* fails */].sum();
  let currentTime = __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["b" /* countDown */].time;
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["h" /* printImg */](`/images/${__WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["c" /* fails */].total}.png`);

  switch (__WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["c" /* fails */].total) {
    case 2:
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["g" /* printClues */](__WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["a" /* clues */].firstClue, Object.keys(__WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["a" /* clues */])[0]);
      __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["b" /* countDown */].time - 5 <= 0 ? __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["b" /* countDown */].finish(__WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["e" /* interval */]) : __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["b" /* countDown */].setTime(currentTime - 5);
      break;

    case 4:
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["g" /* printClues */](__WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["a" /* clues */].secondClue, Object.keys(__WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["a" /* clues */])[1]);
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
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["d" /* hideModal */]();
  __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["c" /* fails */].total = 0;
  __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["e" /* interval */].stop();
  __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["e" /* interval */].reset();
  startGame();
};

const checkBtn = (wordObj, e) => {
  let char = e.target.innerHTML;
  let charIndexArr = __WEBPACK_IMPORTED_MODULE_1__modules_hangman__["a" /* getCharacterMatches */](wordObj.title, char);
  e.target.setAttribute('disabled', '');

  if (charIndexArr.length > 0) {
    charIndexArr.forEach(index => {
      __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["f" /* printChar */](char, index);
      __WEBPACK_IMPORTED_MODULE_1__modules_hangman__["b" /* wordGuessed */](wordObj);
    });
  } else {
    errorHandler();
  }
};

const setFilmToPLay = async id => {
  let film = await __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* getFilmById */](id);
  __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["d" /* filmOnGame */].title = film.Title.replace(/[^A-Za-z0-9]\s/g, ' ');
  __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["d" /* filmOnGame */].clues = [film.Actors.split(',')[0], film.Actors.split(',')[1]];
  restart();
};

async function searchFilm(e) {
  e.preventDefault();
  var movieSearch = e.target[0].value;
  var films = await __WEBPACK_IMPORTED_MODULE_2__services_request_service__["b" /* getFilmsArray */](movieSearch);
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["c" /* displayMoviesOnModal */](films);
}

function startGame() {
  var wordObj = __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["d" /* filmOnGame */];
  var wordName = wordObj.title;
  __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["a" /* clues */].firstClue = wordObj.clues[0];
  __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["a" /* clues */].secondClue = wordObj.clues[1];
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["j" /* renderButtons */]();
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["k" /* renderLetterContainers */](wordName);
  __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["a" /* addListenerButtons */](wordObj, '.letter-btn', checkBtn);
  __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["b" /* countDown */].setTime(50);
  __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["e" /* interval */].stop();
  __WEBPACK_IMPORTED_MODULE_3__services_global_var_service__["e" /* interval */].reset();
}

__WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["a" /* addListenerButtons */](undefined, '.search-btn', __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["m" /* showModalSearch */]);
document.getElementById('close-modal').addEventListener('click', __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["d" /* hideModal */]);
document.getElementById('search-form').addEventListener('submit', searchFilm);
document.getElementById('restart').addEventListener('click', restart);
document.querySelectorAll('.film').forEach(film => {
  film.addEventListener('click', function () {
    __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["d" /* hideModal */]();
    setFilmToPLay(this.getAttribute('film-id'));
  });
});
document.onload = __WEBPACK_IMPORTED_MODULE_0__modules_dom_loader__["m" /* showModalSearch */]();

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCharacterMatches;
/* unused harmony export getGuessingWord */
/* harmony export (immutable) */ __webpack_exports__["b"] = wordGuessed;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_global_var_service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_dom_loader__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_request_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jest_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jest_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__jest_types__);




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
  var letters = __WEBPACK_IMPORTED_MODULE_1__modules_dom_loader__["i" /* queryLetter */]();
  var lettersGuessed = [];
  letters.forEach(char => char.textContent != '' ? lettersGuessed.push(char) : '');

  if (lettersGuessed.length == name.replace(/\s/g, '').length) {
    __WEBPACK_IMPORTED_MODULE_0__services_global_var_service__["e" /* interval */].stop();
    __WEBPACK_IMPORTED_MODULE_1__modules_dom_loader__["l" /* showModalReset */]('You guessed right!');
    Object(__WEBPACK_IMPORTED_MODULE_2__services_request_service__["c" /* postMovieGuessed */])(name, __WEBPACK_IMPORTED_MODULE_0__services_global_var_service__["c" /* fails */].total, __WEBPACK_IMPORTED_MODULE_0__services_global_var_service__["b" /* countDown */].time);
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Global = exports.Config = exports.Circus = void 0;

var Circus = _interopRequireWildcard(__webpack_require__(6));

exports.Circus = Circus;

var Config = _interopRequireWildcard(__webpack_require__(7));

exports.Config = Config;

var Global = _interopRequireWildcard(__webpack_require__(8));

exports.Global = Global;

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzcwMmJiYWI2MTgyNGZlZDFlZGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZG9tLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZ2xvYmFsLXZhci1zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0LXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2hhbmdtYW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqZXN0L3R5cGVzL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AamVzdC90eXBlcy9idWlsZC9DaXJjdXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqZXN0L3R5cGVzL2J1aWxkL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGplc3QvdHlwZXMvYnVpbGQvR2xvYmFsLmpzIl0sIm5hbWVzIjpbImh0bWxCdXR0b24iLCJ2YWwiLCJyZW5kZXJCdXR0b25zIiwiYWJjIiwic3BsaXQiLCJidXR0b25zIiwibWFwIiwibGV0dGVyIiwiam9pbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImh0bWxMZXR0ZXJDb250YWluZXIiLCJzcGFjZSIsImh0bWxMZXR0ZXIiLCJyZW5kZXJMZXR0ZXJDb250YWluZXJzIiwidGl0bGVGaWxtIiwidGl0bGVBcnIiLCJsZXR0ZXJzIiwicHJpbnRDbHVlcyIsImNsdWUiLCJpZCIsImdldEVsZW1lbnRCeUlkIiwiYWRkTGlzdGVuZXJCdXR0b25zIiwid29yZCIsImNsYXNzQnRuIiwiY2FsbGJhY2siLCJhcnJCdG4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJpbnRDaGFyIiwiY2hhciIsImluZGV4IiwicXVlcnlMZXR0ZXIiLCJwcmludEltZyIsImltZ1VybCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwic2hvd01vZGFsUmVzZXQiLCJ0aXRsZSIsImhpZGVNb2RhbCIsImRpc3BsYXkiLCJjb250YWluZXJzIiwiZWxlbWVudCIsInNob3dNb2RhbFNlYXJjaCIsImNsZWFyR2FtZUludGVyZmFjZSIsImlucHV0UGxhY2VIb2xkZXIiLCJlcnJvciIsInBsYWNlaG9sZGVyIiwiZGlzcGxheU1vdmllc09uTW9kYWwiLCJtb3ZpZXNBcnIiLCJoZWlnaHQiLCJtb3ZpZSIsIlRpdGxlIiwiWWVhciIsIlBvc3RlciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJpbWRiSUQiLCJmaWxtc1RvUGljayIsImd1ZXNzQXJyIiwibmFtZSIsImNsdWVzIiwiZmlsbU9uR2FtZSIsImNvdW50RG93biIsInRpbWUiLCJjb3VudCIsInByaW50VGltZSIsInNldFRpbWUiLCJuZXdUaW1lIiwiZmluaXNoIiwiaW50ZXJ2YWwiLCJzdG9wIiwiaW50QWN0aW9uIiwiaW5pdCIsImNsZWFySW50ZXJ2YWwiLCJyZXNldCIsInNldEludGVydmFsIiwiZmFpbHMiLCJ0b3RhbCIsInN1bSIsImZpcnN0Q2x1ZSIsInNlY29uZENsdWUiLCJmZXRjaEZpbG1zIiwic2VhcmNoIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNhdGNoIiwiY29uc29sZSIsImZldGNoSWQiLCJnZXRGaWxtc0FycmF5IiwicmVzcG9uc2UiLCJFcnJvciIsImxvZyIsIlNlYXJjaCIsImZpbG1zIiwiZmlsdGVyIiwiaSIsImdldEZpbG1CeUlkIiwiZmlsbSIsInBvc3RNb3ZpZUd1ZXNzZWQiLCJsaXZlcyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3JIYW5kbGVyIiwiR2xvYmFsVmFyIiwiY3VycmVudFRpbWUiLCJEb21Mb2FkZXIiLCJPYmplY3QiLCJrZXlzIiwicmVzdGFydCIsInN0YXJ0R2FtZSIsImNoZWNrQnRuIiwid29yZE9iaiIsInRhcmdldCIsImNoYXJJbmRleEFyciIsIkhhbmdNYW4iLCJsZW5ndGgiLCJzZXRGaWxtVG9QTGF5IiwiUmVxdWVzdCIsInJlcGxhY2UiLCJBY3RvcnMiLCJzZWFyY2hGaWxtIiwicHJldmVudERlZmF1bHQiLCJtb3ZpZVNlYXJjaCIsInZhbHVlIiwid29yZE5hbWUiLCJ1bmRlZmluZWQiLCJnZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJnZXRDaGFyYWN0ZXJNYXRjaGVzIiwiaW5kaWNlcyIsInRvTG93ZXJDYXNlIiwicHVzaCIsImdldEd1ZXNzaW5nV29yZCIsImFyciIsImd1ZXNzSW5kZXgiLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCJ3b3JkR3Vlc3NlZCIsImxldHRlcnNHdWVzc2VkIiwidGV4dENvbnRlbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM1REE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsVUFBVSxHQUFJQyxHQUFELElBQVM7QUFDL0IsU0FBUSxtQkFBa0JBLEdBQUksd0JBQXVCQSxHQUFJLFdBQXpEO0FBQ0gsQ0FGTTtBQUFBO0FBQUE7QUFJQSxNQUFNQyxhQUFhLEdBQUcsTUFBTTtBQUMvQixNQUFJQyxHQUFHLEdBQUcsOEJBQThCQyxLQUE5QixDQUFv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bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM3MDJiYmFiNjE4MjRmZWQxZWRkIiwiXHJcbmV4cG9ydCBjb25zdCBodG1sQnV0dG9uID0gKHZhbCkgPT4ge1xyXG4gICAgcmV0dXJuIGA8YnV0dG9uIGlkPVwiYnRuLSR7dmFsfVwiIGNsYXNzPVwibGV0dGVyLWJ0blwiPiR7dmFsfTwvYnV0dG9uPmA7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgbGV0IGFiYyA9ICdBQkNERUZHSElKS0xNTsORT1BRUlNUVVZXWFlaJy5zcGxpdCgnJyk7XHJcbiAgICBsZXQgYnV0dG9ucyA9IGFiYy5tYXAobGV0dGVyID0+IGh0bWxCdXR0b24obGV0dGVyKSkuam9pbignJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua2V5Ym9hcmQtLWNvbnRhaW5lcicpLmlubmVySFRNTCA9IGJ1dHRvbnM7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBodG1sTGV0dGVyQ29udGFpbmVyID0gKGxldHRlcikgPT4ge1xyXG4gICAgbGV0IHNwYWNlID0gJzxkaXYgY2xhc3M9XCJsZXR0ZXItY29udGFpbmVyXCI+PC9kaXY+JztcclxuICAgIGxldCBodG1sTGV0dGVyID0gKGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGV0dGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV0dGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1bmRlcmxpbmVcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGApO1xyXG5cclxuICAgIHJldHVybiBsZXR0ZXIgIT09ICcgJyA/IGh0bWxMZXR0ZXIgOiBzcGFjZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckxldHRlckNvbnRhaW5lcnMgPSAodGl0bGVGaWxtKSA9PiB7XHJcbiAgICBsZXQgdGl0bGVBcnIgPSB0aXRsZUZpbG0uc3BsaXQoJycpO1xyXG4gICAgbGV0IGxldHRlcnMgPSB0aXRsZUFyci5tYXAodmFsID0+IGh0bWxMZXR0ZXJDb250YWluZXIodmFsKSkuam9pbignJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhcmFjdGVycy0tY29udGFpbmVyLS1mdWxsd29yZCcpLmlubmVySFRNTCA9IGxldHRlcnM7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRDbHVlcyhjbHVlLCBpZCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9IGNsdWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZExpc3RlbmVyQnV0dG9ucyA9ICh3b3JkLCBjbGFzc0J0biwgY2FsbGJhY2spID0+IHtcclxuICAgIGxldCBhcnJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzQnRuKTtcclxuICAgIGFyckJ0bi5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBjYWxsYmFjayh3b3JkLCBlKSB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcmludENoYXIgPSAoY2hhciwgaW5kZXgpID0+IHtcclxuICAgIHZhciBsZXR0ZXJzID0gcXVlcnlMZXR0ZXIoKTtcclxuICAgIGxldHRlcnNbaW5kZXhdLmlubmVySFRNTCA9IGNoYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcmludEltZyA9IChpbWdVcmwpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW5nbWFuLWltZycpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWdVcmx9KWA7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBxdWVyeUxldHRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGV0dGVyJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93TW9kYWxSZXNldCh0aXRsZSA9IFwiR2FtZSBPdmVyXCIpIHtcclxuICAgIGhpZGVNb2RhbCgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0LWNvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLS1jb250ZW50JykuaW5uZXJIVE1MID0gdGl0bGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlTW9kYWwoKSB7XHJcbiAgICBsZXQgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1jb250YWluZXInKTtcclxuICAgIGNvbnRhaW5lcnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaG93TW9kYWxTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBoaWRlTW9kYWwoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhckdhbWVJbnRlcmZhY2UgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2x1ZXMnKS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5pbm5lckhUTUwgPSAnJyk7XHJcbiAgICBwcmludEltZygnL2ltYWdlcy9ob3JjYS5wbmcnKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlucHV0UGxhY2VIb2xkZXIgPSAoZXJyb3IpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKS5wbGFjZWhvbGRlciA9IGVycm9yO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGxheU1vdmllc09uTW9kYWwgPSAobW92aWVzQXJyKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtLXNlYXJjaCcpLnN0eWxlLmhlaWdodCA9ICc1MCUnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZvb3RlcicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBtb3ZpZXNBcnIuZm9yRWFjaChmdW5jdGlvbiAobW92aWUsIGluZGV4KSB7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250ZW50LS10aXRsZVwiKS5pbm5lckhUTUwgPSBtb3ZpZS5UaXRsZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250ZW50LS1kZXNjXCIpLmlubmVySFRNTCA9IG1vdmllLlllYXI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29udGVudC0taW1hZ2VcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke21vdmllLlBvc3Rlcn0pYDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLWNvbnRlbnRcIilbaW5kZXhdLnNldEF0dHJpYnV0ZShcImZpbG0taWRcIiwgbW92aWUuaW1kYklEKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtZm9vdGVyLS1vcHRpb25hbC0taW1hZ2VcIilbaW5kZXggLSAxXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7bW92aWUuUG9zdGVyfSlgO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtZm9vdGVyLS1vcHRpb25hbC0tdGl0bGVcIilbaW5kZXggLSAxXS5pbm5lckhUTUwgPSBtb3ZpZS5UaXRsZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLWZvb3Rlci0tb3B0aW9uYWxcIilbaW5kZXggLSAxXS5zZXRBdHRyaWJ1dGUoXCJmaWxtLWlkXCIsIG1vdmllLmltZGJJRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmaWxtc1RvUGljayA9ICgpID0+IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsbScpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvZG9tLWxvYWRlci5qcyIsImltcG9ydCB7IHNob3dNb2RhbFJlc2V0IH0gZnJvbSAnLi4vbW9kdWxlcy9kb20tbG9hZGVyJ1xyXG5cclxuZXhwb3J0IHZhciBndWVzc0FyciA9IFt7XHJcbiAgICBuYW1lOiBcIkxvcyBWZW5nYWRvcmVzXCIsXHJcbiAgICBjbHVlczogW1wiU29uIHVuIGVxdWlwb1wiLCBcIlByb3RlamVuIGxhIHRpZXJyYVwiXVxyXG59LCB7XHJcbiAgICBuYW1lOiBcIklyb24gTWFuXCIsXHJcbiAgICBjbHVlczogW1wiRXMgcm9qb1wiLCBcIlBhcmVjZSBoZWNobyBkZSBvcm9cIl1cclxufSxcclxue1xyXG4gICAgbmFtZTogXCJTdWxseVwiLFxyXG4gICAgY2x1ZXM6IFtcIkh1ZHNvblwiLCBcIk15IEFpcmNyYWZ0XCJdXHJcbn0sXHJcbntcclxuICAgIG5hbWU6IFwiRGVhZFBvb2xcIixcclxuICAgIGNsdWVzOiBbXCJQaXNjaW5hXCIsIFwiUm9qYVwiXVxyXG59LFxyXG57XHJcbiAgICBuYW1lOiBcIlRlcm1pbmFsXCIsXHJcbiAgICBjbHVlczogW1wiRGVzZW8gZGUgdW4gcGFkcmVcIiwgXCJIaWpvIGVqZW1wbGFyXCJdXHJcbn0sXHJcbntcclxuICAgIG5hbWU6IFwiRWwgUmV5IExlb25cIixcclxuICAgIGNsdWVzOiBbXCJMaXZlIEFjdGlvblwiLCBcIkhha3VuYS1NYXRhdGFcIl1cclxufSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBmaWxtT25HYW1lID0ge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgY2x1ZXM6IFtdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb3VudERvd24gPSB7XHJcbiAgICB0aW1lOiAwLFxyXG4gICAgY291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZS0tO1xyXG4gICAgfSxcclxuICAgIHByaW50VGltZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGltZXInKS5pbm5lckhUTUwgPSB0aGlzLnRpbWU7XHJcbiAgICB9LFxyXG4gICAgc2V0VGltZShuZXdUaW1lKSB7XHJcbiAgICAgICAgdGhpcy50aW1lID0gbmV3VGltZTtcclxuICAgIH0sXHJcbiAgICBmaW5pc2goKSB7XHJcbiAgICAgICAgaW50ZXJ2YWwuc3RvcCgpO1xyXG4gICAgICAgIHNob3dNb2RhbFJlc2V0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbnRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBjb3VudERvd24udGltZSA8PSAwID8gY291bnREb3duLmZpbmlzaCgpIDogJyc7XHJcbiAgICBjb3VudERvd24ucHJpbnRUaW1lKCk7XHJcbiAgICBjb3VudERvd24uY291bnQoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGludGVydmFsID0ge1xyXG4gICAgaW5pdDogJycsXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbml0KTtcclxuICAgIH0sXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmluaXQgPSBzZXRJbnRlcnZhbChpbnRBY3Rpb24sIDEwMDApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhaWxzID0ge1xyXG4gICAgdG90YWw6IDAsXHJcbiAgICBzdW0oKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbCsrO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2x1ZXMgPSB7XHJcbiAgICBmaXJzdENsdWU6ICcnLFxyXG4gICAgc2Vjb25kQ2x1ZTogJydcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9nbG9iYWwtdmFyLXNlcnZpY2UuanMiLCJpbXBvcnQgeyBpbnB1dFBsYWNlSG9sZGVyIH0gZnJvbSAnLi4vbW9kdWxlcy9kb20tbG9hZGVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoRmlsbXMgPSBhc3luYyAoc2VhcmNoID0gJ1RvbScpID0+IHtcclxuICAgIHJldHVybiBhd2FpdCBmZXRjaChgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/dHlwZT1tb3ZpZSZzPSR7c2VhcmNofSZhcGlrZXk9OWVlMjE5MDdgKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnICsgZSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hJZCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9pPSR7aWR9JnBsb3Q9c2hvcnQmYXBpa2V5PTllZTIxOTA3YClcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjogJyArIGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZpbG1zQXJyYXkgPSBhc3luYyAobW92aWUpID0+IHtcclxuICAgIGxldCByZXNwb25zZSA9IHt9O1xyXG4gICAgbW92aWUgPT0gJycgPyBpbnB1dFBsYWNlSG9sZGVyKCdOZWVkIHRvIHdyaXRlIHNvbWV0aGluZy4uLicpIDogcmVzcG9uc2UgPSBhd2FpdCBmZXRjaEZpbG1zKG1vdmllKTtcclxuICAgIGlmIChyZXNwb25zZS5FcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLkVycm9yKTtcclxuICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuU2VhcmNoKSB7XHJcbiAgICAgICAgbGV0IGZpbG1zID0gcmVzcG9uc2UuU2VhcmNoLmZpbHRlcigodmFsLCBpKSA9PiBpIDwgNSk7XHJcbiAgICAgICAgcmV0dXJuIGZpbG1zO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmlsbUJ5SWQgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGxldCBmaWxtID0gYXdhaXQgZmV0Y2hJZChpZCk7XHJcbiAgICByZXR1cm4gZmlsbTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RNb3ZpZUd1ZXNzZWQgPSBhc3luYyAodGl0bGUsIGxpdmVzLCB0aW1lKSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9tb3ZpZXNgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgbGl2ZXM6IGxpdmVzLFxyXG4gICAgICAgICAgICAgICAgdGltZTogdGltZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcignRXJyb3I6ICcgKyBlKSk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvcmVxdWVzdC1zZXJ2aWNlLmpzIiwiaW1wb3J0ICogYXMgRG9tTG9hZGVyIGZyb20gJy4vbW9kdWxlcy9kb20tbG9hZGVyJztcclxuaW1wb3J0ICogYXMgSGFuZ01hbiBmcm9tICcuL21vZHVsZXMvaGFuZ21hbic7XHJcbmltcG9ydCAqIGFzIFJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LXNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBHbG9iYWxWYXIgZnJvbSAnLi9zZXJ2aWNlcy9nbG9iYWwtdmFyLXNlcnZpY2UnO1xyXG5cclxuY29uc3QgZXJyb3JIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgR2xvYmFsVmFyLmZhaWxzLnN1bSgpO1xyXG4gICAgbGV0IGN1cnJlbnRUaW1lID0gR2xvYmFsVmFyLmNvdW50RG93bi50aW1lO1xyXG4gICAgRG9tTG9hZGVyLnByaW50SW1nKGAvaW1hZ2VzLyR7R2xvYmFsVmFyLmZhaWxzLnRvdGFsfS5wbmdgKTtcclxuICAgIHN3aXRjaCAoR2xvYmFsVmFyLmZhaWxzLnRvdGFsKSB7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICBEb21Mb2FkZXIucHJpbnRDbHVlcyhHbG9iYWxWYXIuY2x1ZXMuZmlyc3RDbHVlLCBPYmplY3Qua2V5cyhHbG9iYWxWYXIuY2x1ZXMpWzBdKTtcclxuICAgICAgICAgICAgR2xvYmFsVmFyLmNvdW50RG93bi50aW1lIC0gNSA8PSAwID8gR2xvYmFsVmFyLmNvdW50RG93bi5maW5pc2goR2xvYmFsVmFyLmludGVydmFsKSA6IEdsb2JhbFZhci5jb3VudERvd24uc2V0VGltZSgoY3VycmVudFRpbWUgLSA1KSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgRG9tTG9hZGVyLnByaW50Q2x1ZXMoR2xvYmFsVmFyLmNsdWVzLnNlY29uZENsdWUsIE9iamVjdC5rZXlzKEdsb2JhbFZhci5jbHVlcylbMV0pO1xyXG4gICAgICAgICAgICBHbG9iYWxWYXIuY291bnREb3duLnRpbWUgLSA1IDw9IDAgPyBHbG9iYWxWYXIuY291bnREb3duLmZpbmlzaChHbG9iYWxWYXIuaW50ZXJ2YWwpIDogR2xvYmFsVmFyLmNvdW50RG93bi5zZXRUaW1lKChjdXJyZW50VGltZSAtIDUpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICBHbG9iYWxWYXIuY291bnREb3duLmZpbmlzaChHbG9iYWxWYXIuaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVzdGFydCA9ICgpID0+IHtcclxuICAgIERvbUxvYWRlci5jbGVhckdhbWVJbnRlcmZhY2UoKTtcclxuICAgIERvbUxvYWRlci5oaWRlTW9kYWwoKTtcclxuICAgIEdsb2JhbFZhci5mYWlscy50b3RhbCA9IDA7XHJcbiAgICBHbG9iYWxWYXIuaW50ZXJ2YWwuc3RvcCgpO1xyXG4gICAgR2xvYmFsVmFyLmludGVydmFsLnJlc2V0KCk7XHJcbiAgICBzdGFydEdhbWUoKTtcclxufVxyXG5cclxuY29uc3QgY2hlY2tCdG4gPSAod29yZE9iaiwgZSkgPT4ge1xyXG4gICAgbGV0IGNoYXIgPSBlLnRhcmdldC5pbm5lckhUTUw7XHJcbiAgICBsZXQgY2hhckluZGV4QXJyID0gSGFuZ01hbi5nZXRDaGFyYWN0ZXJNYXRjaGVzKHdvcmRPYmoudGl0bGUsIGNoYXIpO1xyXG4gICAgZS50YXJnZXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcclxuICAgIGlmIChjaGFySW5kZXhBcnIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNoYXJJbmRleEFyci5mb3JFYWNoKGluZGV4ID0+IHtcclxuICAgICAgICAgICAgRG9tTG9hZGVyLnByaW50Q2hhcihjaGFyLCBpbmRleCk7XHJcbiAgICAgICAgICAgIEhhbmdNYW4ud29yZEd1ZXNzZWQod29yZE9iaik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVycm9ySGFuZGxlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzZXRGaWxtVG9QTGF5ID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBsZXQgZmlsbSA9IGF3YWl0IFJlcXVlc3QuZ2V0RmlsbUJ5SWQoaWQpO1xyXG4gICAgR2xvYmFsVmFyLmZpbG1PbkdhbWUudGl0bGUgPSBmaWxtLlRpdGxlLnJlcGxhY2UoL1teQS1aYS16MC05XVxccy9nLCAnICcpO1xyXG4gICAgR2xvYmFsVmFyLmZpbG1PbkdhbWUuY2x1ZXMgPSBbZmlsbS5BY3RvcnMuc3BsaXQoJywnKVswXSwgZmlsbS5BY3RvcnMuc3BsaXQoJywnKVsxXV07XHJcbiAgICByZXN0YXJ0KCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaEZpbG0oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIG1vdmllU2VhcmNoID0gZS50YXJnZXRbMF0udmFsdWU7XHJcbiAgICB2YXIgZmlsbXMgPSBhd2FpdCBSZXF1ZXN0LmdldEZpbG1zQXJyYXkobW92aWVTZWFyY2gpO1xyXG4gICAgRG9tTG9hZGVyLmRpc3BsYXlNb3ZpZXNPbk1vZGFsKGZpbG1zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG4gICAgdmFyIHdvcmRPYmogPSBHbG9iYWxWYXIuZmlsbU9uR2FtZTtcclxuICAgIHZhciB3b3JkTmFtZSA9IHdvcmRPYmoudGl0bGU7XHJcbiAgICBHbG9iYWxWYXIuY2x1ZXMuZmlyc3RDbHVlID0gd29yZE9iai5jbHVlc1swXTtcclxuICAgIEdsb2JhbFZhci5jbHVlcy5zZWNvbmRDbHVlID0gd29yZE9iai5jbHVlc1sxXTtcclxuICAgIERvbUxvYWRlci5yZW5kZXJCdXR0b25zKClcclxuICAgIERvbUxvYWRlci5yZW5kZXJMZXR0ZXJDb250YWluZXJzKHdvcmROYW1lKTtcclxuICAgIERvbUxvYWRlci5hZGRMaXN0ZW5lckJ1dHRvbnMod29yZE9iaiwgJy5sZXR0ZXItYnRuJywgY2hlY2tCdG4pO1xyXG4gICAgR2xvYmFsVmFyLmNvdW50RG93bi5zZXRUaW1lKDUwKTtcclxuICAgIEdsb2JhbFZhci5pbnRlcnZhbC5zdG9wKCk7XHJcbiAgICBHbG9iYWxWYXIuaW50ZXJ2YWwucmVzZXQoKTtcclxufVxyXG5cclxuRG9tTG9hZGVyLmFkZExpc3RlbmVyQnV0dG9ucyh1bmRlZmluZWQsICcuc2VhcmNoLWJ0bicsIERvbUxvYWRlci5zaG93TW9kYWxTZWFyY2gpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtbW9kYWwnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERvbUxvYWRlci5oaWRlTW9kYWwpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzZWFyY2hGaWxtKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc3RhcnQpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsbScpLmZvckVhY2goZmlsbSA9PiB7XHJcbiAgICBmaWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIERvbUxvYWRlci5oaWRlTW9kYWwoKTtcclxuICAgICAgICBzZXRGaWxtVG9QTGF5KHRoaXMuZ2V0QXR0cmlidXRlKCdmaWxtLWlkJykpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5kb2N1bWVudC5vbmxvYWQgPSBEb21Mb2FkZXIuc2hvd01vZGFsU2VhcmNoKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0ICogYXMgR2xvYmFsVmFyIGZyb20gJy4uL3NlcnZpY2VzL2dsb2JhbC12YXItc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIERvbUxvYWRlciBmcm9tICcuLi9tb2R1bGVzL2RvbS1sb2FkZXInO1xyXG5pbXBvcnQgeyBwb3N0TW92aWVHdWVzc2VkIH0gZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC1zZXJ2aWNlJztcclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnQGplc3QvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENoYXJhY3Rlck1hdGNoZXMod29yZCwgY2hhcikge1xyXG4gICAgd29yZCA9IHdvcmQucmVwbGFjZSgvXFxzL2csICcnKTtcclxuICAgIHZhciBpbmRpY2VzID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdvcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAod29yZFtpXS50b0xvd2VyQ2FzZSgpID09IGNoYXIudG9Mb3dlckNhc2UoKSkgaW5kaWNlcy5wdXNoKGkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluZGljZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHdWVzc2luZ1dvcmQoYXJyKSB7XHJcbiAgICB2YXIgZ3Vlc3NJbmRleCA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKVxyXG4gICAgcmV0dXJuIGFycltndWVzc0luZGV4XVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd29yZEd1ZXNzZWQobmFtZSkge1xyXG4gICAgdmFyIGxldHRlcnMgPSBEb21Mb2FkZXIucXVlcnlMZXR0ZXIoKVxyXG4gICAgdmFyIGxldHRlcnNHdWVzc2VkID0gW107XHJcbiAgICBsZXR0ZXJzLmZvckVhY2goY2hhciA9PiBjaGFyLnRleHRDb250ZW50ICE9ICcnID8gbGV0dGVyc0d1ZXNzZWQucHVzaChjaGFyKSA6ICcnKTtcclxuICAgIGlmIChsZXR0ZXJzR3Vlc3NlZC5sZW5ndGggPT0gbmFtZS5yZXBsYWNlKC9cXHMvZywgJycpLmxlbmd0aCkge1xyXG4gICAgICAgIEdsb2JhbFZhci5pbnRlcnZhbC5zdG9wKCk7XHJcbiAgICAgICAgRG9tTG9hZGVyLnNob3dNb2RhbFJlc2V0KCdZb3UgZ3Vlc3NlZCByaWdodCEnKTtcclxuICAgICAgICBwb3N0TW92aWVHdWVzc2VkKG5hbWUsIEdsb2JhbFZhci5mYWlscy50b3RhbCwgR2xvYmFsVmFyLmNvdW50RG93bi50aW1lKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2hhbmdtYW4uanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5HbG9iYWwgPSBleHBvcnRzLkNvbmZpZyA9IGV4cG9ydHMuQ2lyY3VzID0gdm9pZCAwO1xuXG52YXIgQ2lyY3VzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZSgnLi9DaXJjdXMnKSk7XG5cbmV4cG9ydHMuQ2lyY3VzID0gQ2lyY3VzO1xuXG52YXIgQ29uZmlnID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZSgnLi9Db25maWcnKSk7XG5cbmV4cG9ydHMuQ29uZmlnID0gQ29uZmlnO1xuXG52YXIgR2xvYmFsID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZSgnLi9HbG9iYWwnKSk7XG5cbmV4cG9ydHMuR2xvYmFsID0gR2xvYmFsO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG5ld09iaiA9IHt9O1xuICAgIGlmIChvYmogIT0gbnVsbCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgIHZhciBkZXNjID1cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yXG4gICAgICAgICAgICAgID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSlcbiAgICAgICAgICAgICAgOiB7fTtcbiAgICAgICAgICBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG5ld09iai5kZWZhdWx0ID0gb2JqO1xuICAgIHJldHVybiBuZXdPYmo7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BqZXN0L3R5cGVzL2J1aWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BqZXN0L3R5cGVzL2J1aWxkL0NpcmN1cy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AamVzdC90eXBlcy9idWlsZC9Db25maWcuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQGplc3QvdHlwZXMvYnVpbGQvR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=