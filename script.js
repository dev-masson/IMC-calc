const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

const modalWrapper = document.querySelector('.modal-wrapper');
const modalMesege = document.querySelector('.modal .title span');
const modalButton = document.querySelector('.modal button.close');


form.onsubmit = (event) => {
    event.preventDefault();

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);


    const result = IMC(weight, height);
    const message = `Seu IMC é ${result}`;

    modalMesege.innerHTML = message;
    modalWrapper.classList.add('open');
}

modalButton.onclick = () => {
    modalWrapper.classList.remove('open');
}

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}
