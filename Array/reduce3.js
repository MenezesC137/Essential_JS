Array.prototype.reduce2 = function(callback, valI) {
    const iInicial = valI ? 0 : 1
    let acumulador = valI || this[0]
    for (let i = iInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce2(soma, 21))