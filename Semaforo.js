const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficlight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex= () => colorIndex = colorIndex <2 ? ++colorIndex: 0;

const changeColor= () => {
    const colors= ['Red', 'Yellow', 'Green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval ( intervalId );
}

const turnOn= {

    'Red': () => img.src = './img/vermelho.png' ,
    'Yellow': () => img.src = './img/amarelo.png',
    'Green': () => img.src = './img/verde.png',
    'Automatico': () => intervalId = setInterval( changeColor, 1000)
}

buttons.addEventListener('click', trafficlight);



