class Plantas{
    Planta(boxPlanta, corPlanta, canvas){
        this.larguraPlanta = 30
        this.alturaPlanta = 150;
        this.corPlanta = corPlanta || 'lightgreen'
        
        const positionX = canvas.width / 2 - this.larguraPlanta / 2
        const positionY = canvas.height - 200 - this.alturaPlanta;

        boxPlanta.fillStyle = this.corPlanta
        boxPlanta.fillRect(positionX, positionY, this.larguraPlanta, this.alturaPlanta)
    }
    Grama(boxGrama, corGrama, canvas){
        const positionX = 0
        this.alturaGrama = 0.3 * canvas.height;
        const positionY = canvas.height - this.alturaGrama;
        
        this.larguraGrama = canvas.width
        this.corGrama = corGrama || 'green'

        boxGrama.fillStyle = this.corGrama
        boxGrama.fillRect(positionX, positionY, this.larguraGrama, this.alturaGrama)
    }
}

export default Plantas;