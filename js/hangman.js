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

function getGuessingWord(arr) {
    var guessIndex = parseInt(Math.random() * guessArr.length)
    return arr[guessIndex]
}
