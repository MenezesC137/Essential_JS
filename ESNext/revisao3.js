// ES8: Object.values/Object.entries

const obj = { a: 1, b: 2, c: 3}
console.log(Object.entries(obj))
console.log(Object.values(obj))

//Melhorias na notação Liteal
const nome = 'Carlos: '
const pessoa ={
    nome,
    ola() {
        return 'Oi gente'
    },
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au Au'
    }
}

console.log(new Cachorro().falar())