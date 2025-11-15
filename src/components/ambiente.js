class ambiente{
    constructor(){
        corCeu = ''
        Nuvem = Boolean
        Sol = Boolean
        lua = Boolean

    }
    diaLimpo(){
        this.corCeu = 'blue'
        this.Sol = true
        this.Nuvem = false
    }
    diaChuvoso(){
        this.corCeu = 'gray'
        this.Sol = false
        this.positionSol = 0
        this.raioz = true 
    }
    noite(){
        this.lua = true
        this.corCeu = 'black'
        this.estrelas = true
        this.positionLua = 0
    }
}

export default ambiente