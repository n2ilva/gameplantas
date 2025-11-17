class Nuvem {
    constructor(x, y, largura, altura) {
        this.position = {
            x: x || 100,
            y: y || 50
        };
        this.largura = largura || 150;
        this.altura = altura || 80;
        this.cor = 'white';
        this.velocidade = Math.random() * 0.5 + 0.2; // Velocidade aleatória para movimento
    }

    // Renderiza a nuvem no canvas
    renderizar(contexto) {
        contexto.fillStyle = this.cor;
        
        // Desenha a nuvem como círculos sobrepostos para um visual mais realista
        const raio = this.altura / 3;
        
        // Círculo principal (centro)
        contexto.beginPath();
        contexto.arc(this.position.x + this.largura/2, this.position.y + this.altura/2, raio, 0, Math.PI * 2);
        contexto.fill();
        
        // Círculo esquerdo
        contexto.beginPath();
        contexto.arc(this.position.x + raio, this.position.y + this.altura/2, raio * 0.8, 0, Math.PI * 2);
        contexto.fill();
        
        // Círculo direito
        contexto.beginPath();
        contexto.arc(this.position.x + this.largura - raio, this.position.y + this.altura/2, raio * 0.8, 0, Math.PI * 2);
        contexto.fill();
        
        // Círculo superior
        contexto.beginPath();
        contexto.arc(this.position.x + this.largura/2, this.position.y + raio, raio * 0.7, 0, Math.PI * 2);
        contexto.fill();
    }

    // Move a nuvem horizontalmente (para animação)
    mover(larguraCanvas) {
        this.position.x += this.velocidade;
        
        // Se a nuvem sair da tela pela direita, volta pela esquerda
        if (this.position.x > larguraCanvas) {
            this.position.x = -this.largura;
        }
    }

    // Define uma nova posição para a nuvem
    setPosicao(x, y) {
        this.position.x = x;
        this.position.y = y;
    }

    // Define um novo tamanho para a nuvem
    setTamanho(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    // Define a cor da nuvem
    setCor(cor) {
        this.cor = cor;
    }
}

export default Nuvem;