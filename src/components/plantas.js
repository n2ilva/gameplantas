class Plantas{
    constructor (boxPlantas){
       this.galho = 0;
       this.folha = 0;
       this.cor = '';
       this.fruto = 0;
       this.semente = 0;
       this.altura = 0;
       this.largura = 0;
    }
    
    RegarPlanta(){
        this.baldeAgua = 1;
        return `Planta regada! ${this.baldeAgua} balde de agua`;
    }
    edubaPlanta(){
        this.adubo = 1;
        return `Planta adubada! Quantidade: ${this.adubo}`;
    }
    porSombra(){
        this.naSombra = true
        return `A Planta esta na sombra!`
    }
    porSol(){
        this.noSol = true
        return `Planta na luz do Sol`
    }
    podar(){
        this.podar = true
    }
    grama(boxGrama, corGrama, canvas){
        this.corGrama = corGrama || 'green'
        const alturaGrama = canvas.height * 0.3
        const yGrama = canvas.height - alturaGrama
        
        boxGrama.fillStyle = this.corGrama
        boxGrama.fillRect(0, yGrama, canvas.width, alturaGrama)
        
        return `Grama desenhada ocupando 30% da parte inferior`
    }
}

export default Plantas;