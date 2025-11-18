class Clima {
    constructor(x, y, largura, altura, cor, boxSol, boxLua, boxEstrelas, boxNuvens, boxCeu, canvas){
        this.position = {
            x: x || 100,
            y: y || 50
        };
        this.largura = largura || 100;
        this.altura = altura || 100;
        this.cor = cor || 'yellow'

        boxSol.fillStyle = this.cor
        boxSol.fillRect(this.position.x, this.position.y, this.largura, this.altura)

        boxLua.fillStyle = this.cor
        boxLua.fillRect(this.position.x, this.position.y, this.largura, this.altura)

        boxEstrelas.fillStyle = this.cor
        boxEstrelas.fillRect(this.position.x, this.position.y, this.largura, this.altura)

        boxNuvens.fillStyle = this.cor
        boxNuvens.fillRect(this.position.x, this.position.y, this.largura, this.altura)

        boxCeu.fillStyle = 'lightblue';
        boxCeu.fillRect(0, 0, canvas.width, canvas.height * 0.7);

        boxCeu.fillStyle = 'grey';
        boxCeu.fillRect(0, 0, canvas.width, canvas.height * 0.7);

        boxCeu.fillStyle = 'darkblue';
        boxCeu.fillRect(0, 0, canvas.width, canvas.height * 0.7);
    }
}

export default Clima