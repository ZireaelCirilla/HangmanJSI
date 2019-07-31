import { showModalReset } from '../modules/dom-loader'

export var guessArr = [{
    name: "Los Vengadores",
    clues: ["Son un equipo", "Protejen la tierra"]
}, {
    name: "Iron Man",
    clues: ["Es rojo", "Parece hecho de oro"]
},
{
    name: "Sully",
    clues: ["Hudson", "My Aircraft"]
},
{
    name: "DeadPool",
    clues: ["Piscina", "Roja"]
},
{
    name: "Terminal",
    clues: ["Deseo de un padre", "Hijo ejemplar"]
},
{
    name: "El Rey Leon",
    clues: ["Live Action", "Hakuna-Matata"]
},
];

export const filmOnGame = {
    title: '',
    clues: []
}

export const countDown = {
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
}

export const intAction = () => {
    countDown.time <= 0 ? countDown.finish() : '';
    countDown.printTime();
    countDown.count();
}

export const interval = {
    init: setInterval(intAction, 1000),
    stop() {
        clearInterval(this.init);
    },
    reset() {
        this.init = setInterval(intAction, 1000);
    }
};

export const fails = {
    total: 0,
    sum() {
        this.total++;
    }
}

export const clues = {
    firstClue: '',
    secondClue: ''
}