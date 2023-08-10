export const Modal = {
    
    /* Variáveis*/
    modal: document.querySelector('.screenModal'),
    imgCloseModal: document.querySelector('.screenModal img'),
    h1Modal: document.querySelector('.screenModal h1'),
    pModal: document.querySelector('.screenModal p'),
    btnCalcIMC: document.querySelector('button'),
    header: document.querySelector('header'),
    inputWeight: document.querySelector('.inputWeight'),
    inputHeight: document.querySelector('.inputHeight'),
    main: document.querySelector('main'),
    
    /* Variação de telas */ 
    modalIN () {

        if(Modal.inputHeight.value == '' || Modal.inputWeight.value == '' || isNaN(Modal.inputHeight.value) || isNaN(Modal.inputWeight.value)) {
            Modal.header.classList.add('openError')
        } else {
            Modal.header.classList.remove('openError')
            Modal.main.classList.add('blur')
            Modal.modal.classList.remove('hidden')
        }

    },

    modalOut () {

        Modal.main.classList.remove('blur')
        Modal.modal.classList.add('hidden')
    
        Modal.inputHeight.value = ''
        Modal.inputWeight.value = ''

    },

    /*Função do calculo */
    calculateIMC (weight, height) {
        return (weight / ((height/ 100) ** 2)).toFixed(2)
    },

    /* Função das classificações */ 
    classificationIMC (result) {
        if(result < 18.5) {
            Modal.pModal.innerText = 'Magreza'
        } else if (result >= 18.5 && result <= 24.9) {
            Modal.pModal.innerText = 'Normal'
        } else if (result >= 25 && result <= 29.9){
            Modal.pModal.innerText = 'Sobrepeso'
        } else if (result > 29.9) {
            Modal.pModal.innerText = 'Obesidade'
        }
    },
    
}
  
/* Events */
Modal.btnCalcIMC.addEventListener('click', Modal.modalIN)
Modal.imgCloseModal.addEventListener('click', Modal.modalOut)
/*Validação Keyboard */
window.addEventListener('keydown', (event) => {
    if (event.key == 'Escape') {
        Modal.modalOut()
    } else if (event.key == '.' || event.key == ',' || event.key == '-' || event.key == ';' || event.key == ':' || event.key == '/' || event.key == '*') {
        event.preventDefault()
        Modal.header.classList.add('openError')
    } else {
        Modal.header.classList.remove('openError')
    }
})
    





        
