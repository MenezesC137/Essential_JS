function Carro(velMax = 200, delta = 5) {
    // Atributo privado
    let velAtual = 0

    // Metodo publico
    this.acelerar = function () {
        if (velAtual + delta <= velMax){
            velAtual += delta
        } else {
            velAtual = velMax
        }
    }

    // Metodo Publico
    this.getVelAtual = function() {
        return velAtual
    }

}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelAtual())