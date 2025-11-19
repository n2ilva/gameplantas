class Plantas{
    constructor(){
    }

    carregarImagens(imagens, callback) {
        let carregadas = 0;
        
        imagens.forEach((item, index) => {
            const img = new Image();
            img.src = item.src;
            img.onerror = () => {
                console.error("Erro ao carregar:", item.src);
                carregadas++;
                if (carregadas === imagens.length) callback(imagens);
            };
            img.onload = () => {
                imagens[index].img = img;
                carregadas++;
                if (carregadas === imagens.length) callback(imagens);
            };
        });
    }

    desenharImagens(ctx, imagens) {
        imagens.forEach(item => {
            if (item.img) ctx.drawImage(item.img, item.x, item.y, item.w, item.h);
        });
    }

    Planta(ctx, canvas) {
        const largura = 157;
        const altura = 150;
        const positionX = canvas.width / 2 - largura / 2;
        const positionY = canvas.height * 0.7;

        const imagens = [
            { src: "src/assets/img/graveto.svg", x: positionX - 25, y: positionY - 120, w: largura, h: altura },
            { src: "src/assets/img/cabeca.svg", x: positionX - 25, y: positionY - 200, w: largura, h: altura },
            { src: "src/assets/img/vazo.svg", x: positionX, y: positionY, w: largura, h: altura },
            { src: "src/assets/img/barro.svg", x: positionX, y: positionY - 30, w: largura, h: altura * 0.5 },

        ];

        this.carregarImagens(imagens, (imgs) => this.desenharImagens(ctx, imgs));
    }

    Grama(ctx, canvas, cor) {
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