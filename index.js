const blueButton = document.getElementById('blue_button');
const redButton = document.getElementById('red_button');
const greenButton = document.getElementById('green_button');

let coloredBox = document.getElementsByClassName('colored-box')[0];

// -Función anónima-
// function () {
    
// }


// -Función flecha anónima-
// () => {

// }

// function foo() {
    
// }

// let bar = () => {

// }

let colors = ['blue', 'red', 'green'];

function resetColor() {
    // -METODO 1 DE ITERAR
    // for (let index = 0; index < colors.length; index++) {
    //     const color = colors[i];
        
    // }


    // -METODO 2 DE ITERAR
    // colors.forEach((color) => {

    // });


    // -MÉTODO 3 DE ITERAR (CORRECTO)
    for (const color of colors) {
        coloredBox.classList.remove(color);
    }
}

function changeColorToBlue() {
    resetColor();
    coloredBox.classList.add('blue');
}

function changeColorToRed() {
    resetColor();
    coloredBox.classList.add('red');
}

function changeColorToGreen() {
    resetColor();
    coloredBox.classList.add('green');
}


//Método simple para cambiar los colores, pero incorrecto, ya que complica la cosa si añadimos más clases y/o colores. 

// function changeColorToBlue() {
//     coloredBox.classList.add('blue');
//     coloredBox.classList.remove('red');
//     coloredBox.classList.remove('blue');
// }

// function changeColorToRed() {
//     coloredBox.classList.add('red');
//     coloredBox.classList.remove('blue');
//     coloredBox.classList.remove('green');
// }

// function changeColorToGreen() {
//     coloredBox.classList.add('green');
//     coloredBox.classList.remove('red');
//     coloredBox.classList.remove('blue');
// }

blueButton.addEventListener('click', changeColorToBlue);
redButton.addEventListener('click', changeColorToRed);
greenButton.addEventListener('click', changeColorToGreen);