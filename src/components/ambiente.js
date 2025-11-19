class Clima {
    constructor() {
    }

    CeuDiaLimpo(ctx, canvas) {
        ctx.fillStyle = 'lightblue';
        ctx.fillRect(0, 0, canvas.width, canvas.height * 0.7);
    }

    CeuChuvoso(ctx, canvas) {
        ctx.fillStyle = 'gray';
        ctx.fillRect(0, 0, canvas.width, canvas.height * 0.7);
    }

    CeuNoite(ctx, canvas) {
        ctx.fillStyle = 'darkblue';
        ctx.fillRect(0, 0, canvas.width, canvas.height * 0.7);
    }

    Sol(x, y, largura, altura, ctx) {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(x, y, largura, altura);
    }

    Lua(x, y, largura, altura, ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(x, y, largura, altura);
    }

    Estrelas(ctx, canvas) {
        ctx.fillStyle = 'white';
        for (let i = 0; i < 50; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * (canvas.height * 0.7);
            ctx.fillRect(x, y, 2, 2);
        }
    }

    Nuvem(ctx, canvas) {
        ctx.fillStyle = 'white';
        const nuvens = [];
        for (let i = 0; i < 25; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * (canvas.height * 0.3);
            ctx.fillRect(x, y, 150, 60);
            nuvens.push({ x, y, largura: 150, altura: 60 });
        }
        ctx.fillStyle = 'lightblue';
        nuvens.forEach(nuvem => {
            for (let i = 0; i < 20; i++) {
                const gotaX = nuvem.x + Math.random() * nuvem.largura;
                const gotaY = nuvem.y + nuvem.altura + Math.random() * 200;
                ctx.fillRect(gotaX, gotaY, 2, 2);
            }
        });
    }
}
export default Clima