import Plantas from "./components/plantas.js";
import Clima from "./components/ambiente.js";

//-------------------------------------------------------------------

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function renderizarCanvas() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    gerar();
}
function resizeCanvas() {
    renderizarCanvas();
}
renderizarCanvas();
addEventListener('resize', resizeCanvas);
function ResetarCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
//-------------------------------------------------------------------

function GerarPlanta(){
    const planta = new Plantas();
    planta.Planta(ctx, canvas, 'lightgreen');
}

function GerarGrama(){
    const grama = new Plantas();
    grama.Grama(ctx, canvas, 'green');
}

function GerarDiaLimpo(){
    const clima = new Clima();
    clima.CeuDiaLimpo(ctx, canvas);
    clima.Sol(100, 50, 100, 100, ctx);
}
function GerarDiaChuvoso(){
    const clima = new Clima();
    clima.CeuChuvoso(ctx, canvas);
    clima.Nuvem(ctx, canvas);
}
function GerarNoite(){
    const clima = new Clima();
    clima.CeuNoite(ctx, canvas);
    clima.Lua(100, 50, 80, 80, ctx);
    clima.Estrelas(ctx, canvas);
}

//-------------------------------------------------------------------

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

//-------------------------------------------------------------------

