import Plantas from "./components/plantas.js";
import Clima from "./components/ambiente.js";

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

const boxPlanta = ctx;
const boxSol = ctx;
const boxLua = ctx;
const boxNuvens = ctx;
const boxGrama = ctx;
const boxEstrelas = ctx;
const boxCeu = ctx;

function renderizarCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gerar();
}

function resizeCanvas() {
    renderizarCanvas();
}

renderizarCanvas();
window.addEventListener('resize', resizeCanvas);

function ResetarCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function GerarPlanta(){
    const planta = new Plantas();
    const corPlanta = 'lightgreen';
    planta.Planta(boxPlanta, corPlanta, canvas);
}

function GerarGrama (){
    const grama = new Plantas();
    const corGrama = 'green'
    grama.Grama(boxGrama, corGrama, canvas);
}

function GerarDiaLimpo(){
    const clima = new Clima();
    clima.CeuLimpo(null, boxCeu, canvas);
    clima.Sol(boxSol);
}
function GerarDiaChuvoso(){
    const clima = new Clima();
    clima.CeuChuvoso(null, boxCeu, canvas);
    clima.Nuvem(boxNuvens);
}
function GerarNoite(){
    const clima = new Clima();
    clima.CeuNoite(null, null, boxCeu, canvas);
    clima.Lua(boxLua);
    clima.Estrelas(boxEstrelas);
}


function gerar(){
    const clima = 'diaChuvoso'

    if(clima === 'diaLimpo'){
        ResetarCanvas();
        GerarDiaLimpo();
        GerarGrama();
        GerarPlanta();
        
    }
    else if(clima === 'diaChuvoso'){
        ResetarCanvas();
        GerarDiaChuvoso();
        GerarGrama();
        GerarPlanta();
    }
    else if(clima === 'noite'){
        ResetarCanvas();
        GerarNoite();
        GerarGrama();
        GerarPlanta();
    }
}
gerar();



