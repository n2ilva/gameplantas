import Plantas from "./components/plantas.js";
import Clima from "./components/ambiente.js";

//Import do Canvas
const canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;

//Contexto do canvas
const ctx = canvas.getContext("2d");

//Elementos CTX do Canvas
const boxPlanta = ctx;
const boxSol = ctx;
const boxLua = ctx;
const boxNuvens = ctx;
const boxGrama = ctx;
const boxRaioz = ctx;
const boxEstrelas = ctx;
const boxCeu = ctx;

function GerarPlanta(){
    const planta = new Plantas();
    planta.Plantas(boxPlanta, corPlanta, canvas);
}
function GerarNuvens(){
    const nuvens = new Nuvem();
    nuvens.Nuvem(300, 80, 180, 90);
}

function GerarGrama (){
    const grama = new Plantas();
    grama.Grama(boxGrama, 'green', canvas);
}

function ResetarCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const clima = 'diaLimpo'


if(clima === 'diaLimpo') () => {
    
    const climaLimpo = new Clima();
    climaLimpo.DiaLimpo(boxCeu, boxSol, canvas, grama.alturaGrama);
    ResetarCanvas();
    GerarGrama();
    GerarPlanta();
}
if(clima === 'diaChuvoso') () => {
        const diachuvoso = new Clima();
        diachuvoso.DiaChuvoso(boxCeu, boxNuvens, boxRaioz, canvas, grama.alturaGrama);
        GerarNuvens();
        ResetarCanvas();
        GerarGrama();
}
if(clima === 'noite') () => {
    const noite = new Clima();
    noite.Noite(boxCeu, boxLua, boxEstrelas, canvas, grama.alturaGrama)
}

clima();



