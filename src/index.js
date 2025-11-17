import Plantas from "./components/plantas.js";
import ambiente from "./components/ambiente.js";
import Nuvem from "./components/nuvem.js";

console.log("🚀 Script iniciado com módulos ES6");

//Import do Canvas
const canvas = document.querySelector("canvas");
console.log("📱 Canvas encontrado:", canvas);

if (!canvas) {
    console.error("❌ Canvas não encontrado!");
}

//Canvas renderizar na tela inteira
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(`📏 Canvas redimensionado: ${canvas.width}x${canvas.height}`);
    
    // Redesenha tudo quando redimensionar
    desenharCena();
}

//Contexto do canvas
const ctx = canvas.getContext("2d");
console.log("🎨 Contexto obtido:", ctx);

// Referências para diferentes elementos (mesmo contexto)
const boxPlanta = ctx;
const boxSol = ctx;
const boxLua = ctx;
const boxNuvens = ctx;
const boxGrama = ctx;
const boxSombra = ctx;
const boxRegador = ctx;
const boxRaioz = ctx;
const boxEstrelas = ctx;
const boxCeu = ctx;

//Criando múltiplas nuvens usando a mesma classe
const nuvens = [];

// Nuvem 1 - pequena, no canto superior esquerdo
nuvens.push(new Nuvem(50, 30, 120, 60));

// Nuvem 2 - média, no centro superior
nuvens.push(new Nuvem(300, 80, 180, 90));

// Nuvem 3 - grande, no canto superior direito
nuvens.push(new Nuvem(600, 40, 220, 110));

// Nuvem 4 - pequena, mais abaixo
nuvens.push(new Nuvem(150, 150, 100, 50));

// Nuvem 5 - nuvem escura (para chuva)
const nuvemChuva = new Nuvem(400, 120, 200, 100);
nuvemChuva.setCor('darkgray');
nuvens.push(nuvemChuva);

console.log("☁️ Nuvens criadas:", nuvens.length);

function desenharNuvens() {
    // Renderiza todas as nuvens
    nuvens.forEach((nuvem, index) => {
        nuvem.renderizar(boxNuvens);
        nuvem.mover(canvas.width); // Move as nuvens (animação opcional)
    });
}

function desenharCena() {
    // Limpa todo o canvas uma vez
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log("🧹 Canvas limpo");
    
    //Gerador de Grama
    const grama = new Plantas();
    grama.Grama(boxGrama, 'green', canvas);
    console.log("🌱 Grama desenhada");

    //Gerador de clima
    const clima = 'diachuvoso' // Mudei para mostrar as nuvens melhor

    if(clima === 'dialimpo'){
        const climaLimpo = new ambiente();
        climaLimpo.DiaLimpo(boxCeu, boxSol, canvas, grama.alturaGrama);
    } else if(clima === 'diachuvoso'){
        const diachuvoso = new ambiente();
        diachuvoso.DiaChuvoso(boxCeu, boxNuvens, boxRaioz, canvas, grama.alturaGrama);
        console.log("🌧️ Dia chuvoso desenhado");
    } else if(clima === 'noite'){
        const noite = new ambiente();
        noite.Noite(boxCeu, boxLua, boxEstrelas, canvas, grama.alturaGrama);
    } else {
        console.log('❌ Opção de clima incorreta')
    }

    // Desenha as nuvens customizadas
    desenharNuvens();
    console.log("☁️ Nuvens customizadas desenhadas");

    //Gerador de Planta
    const planta = new Plantas();
    planta.Planta(boxPlanta, 'lightgreen', canvas);
    console.log("🌿 Planta desenhada");
    
    console.log("✅ Cena completa desenhada!");
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Desenha a cena inicial
desenharCena();

// Animação opcional - redesenha as nuvens a cada 100ms para movimento suave
setInterval(() => {
    // Só redesenha as nuvens sem limpar tudo
    nuvens.forEach(nuvem => {
        nuvem.mover(canvas.width);
    });
    // Redesenha toda a cena ocasionalmente para manter as nuvens
    if (Math.random() < 0.1) {
        desenharCena();
    }
}, 100);

console.log("🎯 Setup completo!");



