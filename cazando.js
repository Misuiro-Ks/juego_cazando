let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

const ANCHO_GATO = 70;
const ALTO_GATO = 30;
const ANCHO_COMIDA = 20;
const ALTO_COMIDA = 20;

function graficarGato(){
    ctx.fillStyle = "#e61c1c";
    ctx.fillRect(gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
    
}

function graficarComida(){
    ctx.fillStyle = "#e9ec12";
    ctx.fillRect(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
}

function iniciarJuego(){
    gatoX = (canvas.width - ANCHO_GATO) / 2;
    gatoY = (canvas.height - ALTO_GATO) / 2;

    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;
    graficarGato();
    graficarComida();
}