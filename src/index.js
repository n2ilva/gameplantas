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


function gerar(){
    const clima = 'diaLimpo'


    if(clima === 'diaLimpo'){
        ResetarCanvas();
        const climaLimpo = new Clima();
        climaLimpo.Clima(boxCeu, boxSol, canvas);
        GerarGrama();
        GerarPlanta();
    }
    else if(clima === 'diaChuvoso'){
        ResetarCanvas();
        const diachuvoso = new Clima();
        diachuvoso.Clima(boxCeu, boxNuvens, boxRaioz, canvas);
        GerarNuvens();
        GerarGrama();
    }
    else if(clima === 'noite'){
        ResetarCanvas();
        const noite = new Clima();
        noite.Clima(boxCeu, boxLua, boxEstrelas, canvas)
        GerarGrama();
    }
    else{
        console.log('Clima Nao definido ou nao existe.')
    }
}
gerar();



