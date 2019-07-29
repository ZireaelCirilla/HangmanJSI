
export const htmlButton = (val) => {
    return `<button id="btn-${val}" class="letter-btn">${val}</button>`;
}

export const renderButtons = () => {
    let abc = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
    let buttons = abc.map(letter => htmlButton(letter)).join('');
    document.querySelector('.keyboard--container').innerHTML = buttons;
}

export const htmlLifeIcon = () => {
    return '<div class="life"><i class="fas fa-heart"></i></div>';
}

export const renderLifeIcons = (NumOfLifes) => {
    let lifes = [];
    for (let i = 0; i < NumOfLifes; i++) {
        lifes.push(htmlLifeIcon());
    }
    return lifes.join('');
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

export const addListenerButtons = (word, counter, clues, callback, timer) => {
    let arrBtn = document.querySelectorAll('.letter-btn');
    arrBtn.forEach(btn => btn.addEventListener('click', (e) => { callback(word, counter, clues, e, timer) }));
}

export const printTimer = (time) => {
    document.querySelector('#timer').innerHTML = time; 
}

export const printChar = (letters, char, index) => {
        letters[index].innerHTML = char;
}

export const printImg = (imgUrl) => {
    document.getElementById('hangman-img').style.backgroundImage = `url(${imgUrl})`; 
}