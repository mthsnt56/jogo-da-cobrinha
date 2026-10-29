const canvas= document.getElementById("gameCanvas");
const ctx= canvas.getContext("2d");
const box= 20;

let cobrinha= [];
cobrinha [0] = {x: 9 * box, 
                y: 10 * box
              };
let comida={x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box
            };
let direcao= "RIGHT";

function desenhar(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  desenharcomida();
  desenharcobrinha();
}
function desenharcomida(){
  ctx.fillStyle="#ff0000";
  ctx.fillRect(comida.x,comida.y, box, box);
}
function desenharcobrinha(){
  ctx.fillStyle="#00ff00";
  for (let i= 0; i < cobrinha.length; i++) {
    ctx.fillRect(cobrinha[i].x, cobrinha[i].y, box, box);
    ctx.strokeStyle="#000";
    ctx.strokeRect(cobrinha[i].x, cobrinha[i].y, box, box);
  }
}

document.addEventListener("keydown",mudarDirecao);
function mudarDirecao(event){
  if (event.keyCode == 37 && direcao != "DIREITA") direcao = "ESQUERDA";
  else if (event.keyCode == 38 && direcao != "BAIXO") direcao = "CIMA";
  else if (event.keyCode == 39 && direcao != "ESQUERDA") direcao = "DIREITA";
  else if (event.keyCode == 40 && direcao != "CIMA") direcao = "BAIXO";
}

function atualizar(){
  let cabecaX= cobrinha[0].x;
  let cabecaY= cobrinha[0].y;

  if (direcao == "ESQUERDA") cabecaX -= box;
  if (direcao == "CIMA") cabecaY -= box;
  if (direcao == "DIREITA") cabecaX += box;
  if (direcao == "BAIXO") cabecaY += box;

  if (cabecaX == comida.x && cabecaY == comida.y){
    comida={
      x:Math.floor (Math.random ()*20) * box,
      y:Math.floor (Math.random ()*20) * box
    };
  } else {
  cobrinha.pop();
  }

  let novacabeca = {
  x: cabecaX, y: cabecaY
  };
  cobrinha.unshift (novacabeca);
}

function iniciarJogo() {
    atualizar();
    desenhar();
  }
let jogo= setInterval(iniciarJogo, 100);