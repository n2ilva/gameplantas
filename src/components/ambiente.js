class ambiente{
    constructor(){
        this.corCeu = ''
        this.Nuvem = false
        this.Sol = false
        this.lua = false
        this.raioz = false
    }
    DiaLimpo(boxCeu, boxSol, canvas, alturaGrama){
        this.corCeu = 'lightblue'
        this.Sol = {
            x:100,
            y:100,
        }
        const alturaCeu = canvas.height - Math.abs(alturaGrama)

        boxCeu.fillStyle = this.corCeu
        boxCeu.fillRect(0, 0, canvas.width, alturaCeu)
        
        boxSol.fillStyle = 'yellow'
        boxSol.fillRect(this.Sol.x, this.Sol.y, 100, 100)
    }
    DiaChuvoso(boxCeu, boxNuvens, boxRaioz, canvas, alturaGrama){
        this.corCeu = 'darkgray'
        this.corNuvens = 'white'
        this.positionNuvens = {
            x:150,
            y:200,
        }
        this.raioz = true
        
        const alturaCeu = canvas.height - Math.abs(alturaGrama)

        boxCeu.fillStyle = this.corCeu
        boxCeu.fillRect(0, 0, canvas.width, alturaCeu)

        boxNuvens.fillStyle = this.corNuvens
        boxNuvens.fillRect(this.positionNuvens.x, this.positionNuvens.y, 280, 100)

        boxRaioz.fillStyle = 'darkblue'
        boxRaioz.fillRect(this.positionNuvens.x + 100, this.positionNuvens.y + 50, 5, 300)
    }
    Noite(boxCeu, boxLua, boxEstrelas, canvas, alturaGrama){
        this.corlua = 'white'
        this.corCeu = 'darkblue'
        this.positionLua = {
            x:100,
            y:100,
        }
        this.positionEstrelas = {
            x:300,
            y:200,
        }
        
        const alturaCeu = canvas.height - Math.abs(alturaGrama)

        boxCeu.fillStyle = this.corCeu
        boxCeu.fillRect(0, 0, canvas.width, alturaCeu)
        
        boxLua.fillStyle = this.corlua
        boxLua.fillRect(this.positionLua.x, this.positionLua.y, 100, 100)

        boxEstrelas.fillStyle = 'white'
        boxEstrelas.fillRect(this.positionEstrelas.x, this.positionEstrelas.y, 10, 10)
    }
}

export default ambiente