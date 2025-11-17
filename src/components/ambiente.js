class Clima {
    Sol(boxSol) {
        this.position = {
            x: 100,
            y: 50
        };
        this.largura = 100;
        this.altura = 100;
        this.cor = 'yellow';
        this.velocidade = 1

        boxSol.fillStyle = this.cor
        boxSol.fillRect(this.position.x, this.position.y, this.largura, this.altura)
    }
    Lua(boxLua) {
        this.position = {
            x: 200,
            y: 50
        };
        this.largura = 100;
        this.altura = 100;
        this.cor = 'white';
        this.velocidade = 1

        boxLua.fillStyle = this.cor
        boxLua.fillRect(this.position.x, this.position.y, this.largura, this.altura)
    }
    Estrelas(boxEstrelas) {
        this.position = {
            x: 300,
            y: 50
        };
        this.largura = 20;
        this.altura = 20;
        this.cor = 'white';
        this.velocidade = 1

        boxEstrelas.fillStyle = this.cor
        boxEstrelas.fillRect(this.position.x, this.position.y, this.largura, this.altura)
    }
    Nuvem(boxNuvens) {
        this.position = {
            x: 100,
            y: 50
        };
        this.largura = 150;
        this.altura = 80;
        this.cor = 'white';
        this.velocidade = 2

        boxNuvens.fillStyle = this.cor
        boxNuvens.fillRect(this.position.x, this.position.y, this.largura, this.altura)
    }
    CeuLimpo(Sol, boxCeu, canvas){
        Sol
        const corCeu = 'lightblue'
        const alturaCeu = canvas.height - Math.abs(alturaGrama)
        boxCeu.fillStyle = corCeu;
        boxCeu.fillRect(0, 0, canvas.width, canvas.height * 0.7);
    }
    CeuChuvoso(Nuvens, boxCeu, canvas){
        Nuvens
        const corCeu = 'grey'
        const alturaCeu = canvas.height - Math.abs(alturaGrama)
        boxCeu.fillStyle = corCeu;
        boxCeu.fillRect(0, 0, canvas.width, canvas.height * 0.7);
    }
    CeuNoite(Lua, Estrelas, boxCeu, canvas){
        Lua
        Estrelas
        const corCeu = 'darkblue'
        const alturaCeu = canvas.height - Math.abs(alturaGrama)
        boxCeu.fillStyle = corCeu;
        boxCeu.fillRect(0, 0, canvas.width, canvas.height * 0.7);
    }
}

export default Clima