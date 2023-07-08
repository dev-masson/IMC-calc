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

    let message;

    if (result < 16) {
        message = `Seu IMC é: ${result}<br>
        Você está em Magreza Grau III`;
    } else if (result >= 16 && result < 16.9) {
        message = `Seu IMC é: ${result}<br>
        Você está em Magreza Grau II`;
    } else if (result >= 17 && result < 18.4) {
        message = `Seu IMC é: ${result}<br>
        Você está em Magreza Grau I`;
    } else if (result >= 18.5 && result < 24.9) {
        message = `Seu IMC é: ${result}<br>
        Você está em Eutrofia`;
    } else if (result >= 25 && result < 29.9) {
        message = `Seu IMC é: ${result}<br>
        Você está em Sobrepeso`;
    } else if (result >= 30 && result < 34.9) {
        message = `Seu IMC é: ${result}<br>
        Você está em Obesidade Grau I`;
    } else if (result >= 35 && result < 39.9) {
        message = `Seu IMC é: ${result}<br>
        Você está em Obesidade Grau II`;
    } else {
        message = `Seu IMC é: ${result}<br>
        Você está em Obesidade Grau III`;
    }
    
    console.log(message);
    
        

    Modal.message.innerHTML = message;
    Modal.open();
}

