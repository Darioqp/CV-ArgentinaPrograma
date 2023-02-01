let count = 19;

const botonMeGusta = document.querySelector("#boton-like");

const numero = document.querySelector("#number");

numero.textContent = count;

const botonMostrar = document.querySelector('#btn-mostrar');

const botonOcultar = document.querySelector('#btn-ocultar');

const fila2 = document.querySelector('#row2');

const botonBold = document.querySelector('#boton-bold');

const botonItalic = document.querySelector('#boton-italic');

const botonUnder = document.querySelector('#boton-under');

const texto = document.querySelector('.text-about');

function mostrar() {
    fila2.style.display = "flex";
    botonMostrar.style.display = "none";
    botonOcultar.style.display = "block";
}

function ocultar() {
    fila2.style.display = "none";
    botonMostrar.style.display = "block";
    botonOcultar.style.display = "none";
}


function contador() {

  numero.textContent++;
}

botonMeGusta.addEventListener("click", contador);

botonMostrar.addEventListener("click", mostrar);

botonOcultar.addEventListener("click", ocultar);

botonBold.addEventListener("click", () => {
    texto.classList.toggle('bold');
})

botonItalic.addEventListener("click", () => {
    texto.classList.toggle('italic');
})

botonUnder.addEventListener("click", () => {
    texto.classList.toggle('under');
})

