import { Modal } from './modal.js'

/* Variáveis */
let form = document.querySelector('form');
let header = document.querySelector('header');

/* calculando IMC após dar submit/ retirando atualização da página(prevent default) */ 
form.onsubmit = (event) => {
    event.preventDefault()


    let weight = Modal.inputWeight.value
    let height = Modal.inputHeight.value
    let result = Modal.calculateIMC(weight,height)


    Modal.h1Modal.innerText = `Seu IMC é de ${result}`

    Modal.classificationIMC(result)

};

