function typeWrite(elemento) {
    let textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach((letter, index)=> {
        setTimeout(function () {
            elemento.innerHTML += letter;
        }, 65 * index)

    });
}

const titleIndex = document.querySelector('.letter-animation');

typeWrite(titleIndex);


