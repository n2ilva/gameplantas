class Clima{
    Sol(x, y, largura, altura, boxSol){
        this.position = {
            x: x || 100,
            y: y || 50
        };
        this.largura = largura || 100;
        this.altura = altura || 100;
        this.cor = 'yellow';
        this.velocidade = 1

        boxSol.fillStyle = this.cor
        boxSol.fillRect(this.position.x, this.position.y, this.largura, this.altura)
    }
    Lua(x, y, largura, altura, boxLua){
        this.position = {
            x: x || 200,
            y: y || 50
        };
        this.largura = largura || 100;
        this.altura = altura || 100;
        this.cor = 'white';
        this.velocidade = 1

        boxLua.fillStyle = this.cor
        boxLua.fillRect(this.position.x, this.position.y, this.largura, this.altura)
    }
    Nuvem (x, y, largura, altura, boxNuvens){
        this.position = {
            x: x || 100,
            y: y || 50
        };
        this.largura = largura || 150;
        this.altura = altura || 80;
        this.cor = 'white';
        this.velocidade = 2

        boxNuvens.fillStyle = 'white'
        boxNuvens.fillRect(this.position.x, this.position.y, this.largura, this.altura)
    }
        
    diaLimpo(Sol, boxCeu, canvas){
            Sol
            const corCeu = 'lightblue'
            const alturaCeu = canvas.height - Math.abs(alturaGrama)
            boxCeu.fillStyle = corCeu
            boxCeu.fillRect(0, 0, canvas.width, alturaCeu)
        };
    diaChuvoso(Nuvens, boxCeu, canvas){
            Nuvens
            const corCeu = 'grey'
            const alturaCeu = canvas.height - Math.abs(alturaGrama)
            boxCeu.fillStyle = corCeu
            boxCeu.fillRect(0, 0, canvas.width, alturaCeu)
        };
    Noite(Lua, boxCeu, canvas){
            Lua
            const corCeu = 'darkblue'
            const alturaCeu = canvas.height - Math.abs(alturaGrama)
            boxCeu.fillStyle = corCeu
            boxCeu.fillRect(0, 0, canvas.width, alturaCeu)
        };
}

export default Clima