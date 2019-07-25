const htmlButton = (val) => {
    return `<button id="btn-${val}" class="letter-btn">${val}</button>`;
}

const renderButtons = () => {
    let abc = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
    return abc.map(letter => htmlButton(letter)).join('');
}