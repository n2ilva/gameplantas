class Plantas{
    Planta(boxPlanta, corPlanta, canvas){
        this.larguraPlanta = 30
        this.alturaPlanta = 200; // Altura positiva
        this.corPlanta = corPlanta || 'lightgreen'
        
        const positionX = canvas.width / 2 - this.larguraPlanta / 2
        const positionY = canvas.height - 200 - this.alturaPlanta; // Posição correta

        boxPlanta.fillStyle = this.corPlanta
        boxPlanta.fillRect(positionX, positionY, this.larguraPlanta, this.alturaPlanta)
    }
    RegarPlanta(){
        this.baldeAgua = 1;
        return `Planta regada! ${this.baldeAgua} balde de agua`;
    }
    EdubaPlanta(){
        this.adubo = 1;
        return `Planta adubada! Quantidade: ${this.adubo}`;
    }
    PorSombra(){
        this.naSombra = true
        return `A Planta esta na sombra!`
    }
    PodaorSol(){
        this.noSol = true
        return `Planta na luz do Sol`
    }
    Podar(){
        this.podar = true
    }
    Grama(boxGrama, corGrama, canvas){
        const positionX = 0
        this.alturaGrama = 0.3 * canvas.height; // Altura positiva
        const positionY = canvas.height - this.alturaGrama; // Posição correta
        
        this.larguraGrama = canvas.width
        this.corGrama = corGrama || 'green'

        boxGrama.fillStyle = this.corGrama
        boxGrama.fillRect(positionX, positionY, this.larguraGrama, this.alturaGrama)
    }
}

export default Plantas;