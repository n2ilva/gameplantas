import Plantas from "./components/plantas";
import ambiente from "./components/ambiente.js";

//Import do Canvas
const canvas = document.querySelector("canvas");

//Fundo/Tempo
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Redesenha a grama após redimensionamento
    desenharGrama();
}

function desenharGrama() {
    // Limpa o canvas antes de desenhar
    boxGrama.clearRect(0, 0, canvas.width, canvas.height);
    
    // Desenha a grama ocupando 30% da parte inferior
    planta.grama(boxGrama, 'green', canvas);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const boxPlantaa = canvas.getContext("2d");
const boxSol = canvas.getContext("2d");
const boxLua = canvas.getContext("2d");
const boxNuvens = canvas.getContext("2d");
const boxGrama = canvas.getContext("2d");
const boxSombra = canvas.getContext("2d");
const boxRegador = canvas.getContext("2d");
const boxRaioz = canvas.getContext("2d");
const boxEstrelas = canvas.getContext("2d");

// Criando a grama, ocupando 30% da parte inferior
const planta = new Plantas();
desenharGrama();





