class Plantas{
    constructor(){
    }

    Planta(ctx, canvas, cor){
        const largura = 30;
        const altura = 150;
        const corPlanta = cor || 'lightgreen';
        
        const positionX = canvas.width / 2 - largura / 2;
        const positionY = canvas.height - 200 - altura;

        ctx.fillStyle = corPlanta;
        ctx.fillRect(positionX, positionY, largura, altura);
    }

    Grama(ctx, canvas, cor){
        const positionX = 0;
        const largura = canvas.width;
        const altura = 0.3 * canvas.height;
        const positionY = canvas.height - altura;
        const corGrama = cor || 'green';

        ctx.fillStyle = corGrama;
        ctx.fillRect(positionX, positionY, largura, altura);
    }
}

export default Plantas;