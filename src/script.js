import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { IMC, notNumber } from "./utils.js";

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.oninput = (event) => {
    AlertError.close();
}

form.onsubmit = (event) => {
    event.preventDefault();

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);

    if (weightOrHeightIsNotANumber) {
        AlertError.open();
        return;
    }

    AlertError.close();


    const result = IMC(weight, height);
    DisplayResultMessage(result);
    
}

function DisplayResultMessage(result){
    const message = `Seu IMC é ${result}`;

    Modal.message.innerHTML = message;
    Modal.open();
}

