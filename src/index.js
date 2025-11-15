import Plantas from "./components/plantas.js";
import ambiente from "./components/ambiente.js";

//Import do Canvas
const canvas = document.querySelector("canvas");

//Canvas renderizar na tela inteira
function resizeCanvas() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}
resizeCanvas();
addEventListener('resize', resizeCanvas);

//Blocos do canvas

const boxPlanta = canvas.getContext("2d");
const boxSol = canvas.getContext("2d");
const boxLua = canvas.getContext("2d");
const boxNuvens = canvas.getContext("2d");
const boxGrama = canvas.getContext("2d");
const boxSombra = canvas.getContext("2d");
const boxRegador = canvas.getContext("2d");
const boxRaioz = canvas.getContext("2d");
const boxEstrelas = canvas.getContext("2d");
const boxCeu = canvas.getContext("2d");

//Gerador de Grama
const grama = new Plantas();
grama.Grama(boxGrama, 'green', canvas);

//Gerador de clima

const clima = 'dialimpo'

if(clima === 'dialimpo'){
    const climaLimpo = new ambiente();
    climaLimpo.DiaLimpo(boxCeu, boxSol, canvas, grama.alturaGrama);
} else if(clima === 'diachuvoso'){
    const diachuvoso = new ambiente();
    diachuvoso.DiaChuvoso(boxCeu, boxNuvens, boxRaioz, canvas, grama.alturaGrama);
} else if(clima === 'noite'){
    const noite = new ambiente();
    noite.Noite(boxCeu, boxLua, boxEstrelas, canvas, grama.alturaGrama);
} else(console.log('Opção incorreta'))

//Gerador de Planta
const planta = new Plantas();
planta.Planta(boxPlanta, 'lightgreen', canvas)



