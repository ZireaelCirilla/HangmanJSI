import * as DomLoader from './modules/dom-loader';
import * as HangMan from './modules/hangman';
import * as Request from './services/request-service';
import * as GlobalVar from './services/global-var-service';

const errorHandler = () => {
    GlobalVar.fails.sum();
    let currentTime = GlobalVar.countDown.time;
    DomLoader.printImg(`/images/${GlobalVar.fails.total}.png`);
    switch (GlobalVar.fails.total) {
        case 2:
            DomLoader.printClues(GlobalVar.clues.firstClue, Object.keys(GlobalVar.clues)[0]);
            GlobalVar.countDown.time - 5 <= 0 ? GlobalVar.countDown.finish(GlobalVar.interval) : GlobalVar.countDown.setTime((currentTime - 5));
            break;
        case 4:
            DomLoader.printClues(GlobalVar.clues.secondClue, Object.keys(GlobalVar.clues)[1]);
            GlobalVar.countDown.time - 5 <= 0 ? GlobalVar.countDown.finish(GlobalVar.interval) : GlobalVar.countDown.setTime((currentTime - 5));
            break;
        case 6:
            GlobalVar.countDown.finish(GlobalVar.interval);
            break;
        default:
            break;
    }
}

const restart = () => {
    DomLoader.clearGameInterface();
    DomLoader.hideModal();
    GlobalVar.fails.total = 0;
    GlobalVar.interval.stop();
    GlobalVar.interval.reset();
    startGame();
}

const checkBtn = (wordObj, e) => {
    let char = e.target.innerHTML;
    let charIndexArr = HangMan.getCharacterMatches(wordObj.title, char);
    e.target.setAttribute('disabled', '');
    if (charIndexArr.length > 0) {
        charIndexArr.forEach(index => {
            DomLoader.printChar(char, index);
            HangMan.wordGuessed(wordObj.title);
        });
    } else {
        errorHandler();
    }
}

const setFilmToPLay = async (id) => {
    let film = await Request.getFilmById(id);
    GlobalVar.filmOnGame.title = film.Title;
    GlobalVar.filmOnGame.clues = [film.Actors.split(',')[0], film.Actors.split(',')[1]];
    startGame();
}

async function searchFilm(e) {
    e.preventDefault();
    var movieSearch = e.target[0].value;
    var films = await Request.getFilmsArray(movieSearch);
    DomLoader.displayMoviesOnModal(films);
    console.log(films);
}

function startGame() {
    var wordObj = GlobalVar.filmOnGame;
    var wordName = wordObj.title;
    GlobalVar.clues.firstClue = wordObj.clues[0];
    GlobalVar.clues.secondClue = wordObj.clues[1];
    DomLoader.renderButtons()
    DomLoader.renderLetterContainers(wordName);
    DomLoader.addListenerButtons(wordObj, '.letter-btn', checkBtn);
    GlobalVar.countDown.setTime(50);
    GlobalVar.interval.init;
}

// startGame();

DomLoader.addListenerButtons(undefined, '.search-btn', DomLoader.showModalSearch);
document.getElementById('close-modal').addEventListener('click', DomLoader.hideModal);
document.getElementById('search-form').addEventListener('submit', searchFilm);
document.getElementById('restart').addEventListener('click', restart);
document.getElementById('search-reset').addEventListener('click', () => {
    restart();
    DomLoader.showModalSearch();
});