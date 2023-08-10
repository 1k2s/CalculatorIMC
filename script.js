let form = document.querySelector('form');
let inputWeight = document.querySelector('.inputWeight');
let inputHeight = document.querySelector('.inputHeight');
let btnCalcIMC = document.querySelector('button');
let main = document.querySelector('main');
let modal = document.querySelector('.screenModal');
let body = document.querySelector('body');
let imgClose = document.querySelector('.screenModal img');
let h1Modal = document.querySelector('.screenModal h1');
let pModal = document.querySelector('.screenModal p');
let header = document.querySelector('header')
let result;

/*Função de Cálculo IMC */ 
function calcIMC (weight, height) {
    return (weight / ((height/ 100) ** 2)).toFixed(2)
};

/*Função das classificações */ 
function classIMC () {
    if(result < 18.5) {
        pModal.innerText = 'Magreza'
    } else if (result >= 18.5 && result <= 24.9) {
        pModal.innerText = 'Normal'
    } else if (result >= 25 && result <= 29.9){
        pModal.innerText = 'Sobrepeso'
    } else if (result > 29.9) {
        pModal.innerText = 'Obesidade'
    }
};

/*calculando IMC após dar submit/ retirando atualização da página(prevent default) */ 
form.onsubmit = (event) => {

    event.preventDefault()

    let weight = inputWeight.value
    let height = inputHeight.value

    result = calcIMC(weight,height)

    h1Modal.innerText = `Seu IMC é de ${result}`

    classIMC()

};

/*Função de validação isNaN/Empty */
function validError () {
    if(inputHeight.value == '' || inputWeight.value == '' || isNaN(inputHeight.value) || isNaN(inputWeight.value)) {
        header.classList.add('openError')
    } else {
        header.classList.remove('openError')
        main.classList.add('blur')
        modal.classList.remove('hidden')
    }
};

/*Funcão de validação . , */
function block (event) {
    console.log(event)
    if(event.key == '.' || event.key == ',' || event.key == '-') {
        event.preventDefault()
        header.classList.add('openError')
    } else {
        header.classList.remove('openError')
    }
};







/*Transições de telas */ 
function modalIN () {
    validError()
};
        
function modalOut () {
    main.classList.remove('blur')
    modal.classList.add('hidden')

    inputHeight.value = ''
    inputWeight.value = ''
};





/*Events */
btnCalcIMC.addEventListener('click', modalIN)
imgClose.addEventListener('click', modalOut)
inputWeight.addEventListener('keypress', block)
inputHeight.addEventListener('keypress', block)


