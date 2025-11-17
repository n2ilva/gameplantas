import Plantas from "./components/plantas.js";
import Clima from "./components/ambiente.js";

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

const boxPlanta = ctx;
const boxSol = ctx;
const boxLua = ctx;
const boxNuvens = ctx;
const boxGrama = ctx;
const boxRaioz = ctx;
const boxEstrelas = ctx;
const boxCeu = ctx;

//Função para redimensionar canvas
function resizeCanvas() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    gerar();
}
resizeCanvas();
addEventListener('resize', resizeCanvas);

function ResetarCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function GerarPlanta(){
    const planta = new Plantas();
    const corPlanta = 'lightgreen';
    planta.Planta(boxPlanta, corPlanta, canvas);
}

function GerarNuvens(){
    const nuvens = new Clima();
    nuvens.Nuvem(150, 80, 200, 100, boxNuvens);
}

function GerarGrama (){
    const grama = new Plantas();
    grama.Grama(boxGrama, 'green', canvas);
}

function GerarSol(){
    const sol = new Clima();
    sol.Sol(100, 50, 100, 100, boxSol);
}

function GerarLua(){
    const lua = new Clima();
    lua.Lua(200, 50, 100, 100, boxLua);
}

function gerar(){
    const clima = 'diaLimpo'

    if(clima === 'diaLimpo'){
        ResetarCanvas();
        boxCeu.fillStyle = 'lightblue';
        boxCeu.fillRect(0, 0, canvas.width, canvas.height * 0.7);
        GerarGrama();
        GerarPlanta();
        GerarSol();
        
    }
    else if(clima === 'diaChuvoso'){
        ResetarCanvas();
        boxCeu.fillStyle = 'grey';
        boxCeu.fillRect(0, 0, canvas.width, canvas.height * 0.7);
        GerarNuvens();
        GerarGrama();
    }
    else if(clima === 'noite'){
        ResetarCanvas();
        boxCeu.fillStyle = 'darkblue';
        boxCeu.fillRect(0, 0, canvas.width, canvas.height * 0.7);
        GerarGrama();
        GerarLua();
    }
    else{
        console.log('Clima não definido ou não existe.');
    }
}
gerar();



