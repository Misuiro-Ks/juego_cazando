let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

function graficarGato(){
    const ancho = 70;
    const alto = 30;
    const x = (canvas.width - ancho) / 2;
    const y = (canvas.height - alto) / 2;

    ctx.fillStyle = "#e61c1c";
    ctx.fillRect(x, y, ancho, alto);
    
}

function graficarComida(){
    ctx.fillStyle = "#e9ec12";
    ctx.fillRect(0, 0, 20, 20);
}

function iniciarJuego(){
    graficarGato();
    graficarComida();
}