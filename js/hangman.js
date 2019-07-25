var guessArr = [{
    name: "Los Vengadores",
    pistas: ["Son un equipo", ""]
}, {
    name: "Iron-Man",
    pistas: ["asdasdasd", "asdasdasd"]
},
{
    name: "Sully",
    pistas: ["asdasdasd", "asdasdasd"]
},
{
    name: "DeadPool",
    pistas: ["asdasdasd", "asdasdasd"]
},
{
    name: "Terminal",
    pistas: ["asdasdasd", "asdasdasd"]
},
{
    name: "El Rey León",
    pistas: ["asdasdasd", "asdasdasd"]
},
];

startGame()

function startGame() {
    var playing = true;
    var wordObj = getGuessingWord(guessArr);
    var wordName = wordObj.name
    if (playing) {
        // sustituir a por el input
        var char = "a"
        console.log(wordName.indexOf(char));
    }

}

console.log(timeLimit(1000))

function getGuessingWord(arr) {
    var guessIndex = parseInt(Math.random() * guessArr.length)
    return arr[guessIndex]
}

function timeLimit(time) {
    var timer = setTimeout(() => {
        // game finished logic goes here
        console.log(`Timer set for ${time} miliseconds`);
    }, time);
    return timer
}

const htmlButton = (val) => {
    return `<button id="btn-${val}" class="letter-btn">${val}</button>`;
}

const renderButtons = () => {
    let abc = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
    return abc.map(letter => htmlButton(letter)).join('');
}

const htmlLifeIcon = () => {
    return '<div class="life"><i class="fas fa-heart"></i></div>';
}

const renderLifeIcons = (NumOfLifes) => {
    let lifes = [];
    for(let i=0; i<NumOfLifes; i++){
        lifes.push(htmlLifeIcon());
    }
    return lifes.join('');
}

const htmlLetterContainer = (letter) => {
    return (`
        <div class="letter-container">
            <div class="letter"></div>
            <div class="underline"></div>
        </div>
    `);
}

const renderLetterContainers = (titleFilm) => {
    let space = '<div class="letter-container"></div>';
    let titleArr = titleFilm.split('');
    return titleArr.map(val => val !== ' ' ? htmlFilmLetter(val) : space ).join('');
}