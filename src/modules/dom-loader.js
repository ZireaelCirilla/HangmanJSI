
export const htmlButton = (val) => {
    return `<button id="btn-${val}" class="letter-btn">${val}</button>`;
}

export const renderButtons = () => {
    let abc = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
    let buttons = abc.map(letter => htmlButton(letter)).join('');
    document.querySelector('.keyboard--container').innerHTML = buttons;
}

export const htmlLetterContainer = (letter) => {
    let space = '<div class="letter-container"></div>';
    let htmlLetter = (`
        <div class="letter-container">
            <div class="letter"></div>
            <div class="underline"></div>
        </div>
    `);

    return letter !== ' ' ? htmlLetter : space;
}

export const renderLetterContainers = (titleFilm) => {
    let titleArr = titleFilm.split('');
    let letters = titleArr.map(val => htmlLetterContainer(val)).join('');
    document.querySelector('.characters--container--fullword').innerHTML = letters;

}

export function printClues(clue, id) {
    document.getElementById(id).innerHTML = clue
}

export const addListenerButtons = (word, classBtn, callback) => {
    let arrBtn = document.querySelectorAll(classBtn);
    arrBtn.forEach(btn => btn.addEventListener('click', (e) => { callback(word, e) }));
}

export const printChar = (char, index) => {
    var letters = queryLetter();
    letters[index].innerHTML = char;
}

export const printImg = (imgUrl) => {
    document.getElementById('hangman-img').style.backgroundImage = `url(${imgUrl})`;
}

export const queryLetter = () => {
    return document.querySelectorAll('.letter');
}

export function showModalReset(title = "Game Over") {
    hideModal();
    document.getElementById('reset-container').style.display = 'block';
    document.getElementById('modal--content').innerHTML = title;
}

export function hideModal() {
    let containers = document.querySelectorAll('.modal-container');
    containers.forEach(element => element.style.display = 'none');
}

export const showModalSearch = () => {
    hideModal();
    document.getElementById('search-container').style.display = 'block';
}

export const clearGameInterface = () => {
    document.querySelectorAll('.clues').forEach(element => element.innerHTML = '');
    printImg('/images/horca.png');
}

export const inputPlaceHolder = (error) => {
    document.getElementById('search').placeholder = error;
}

export const displayMoviesOnModal = (moviesArr) => {
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
}