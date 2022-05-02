const alunos = [
    { nome : 'João', nota: 7.3, bolsista: false},
    { nome : 'Maria', nota: 9.2, bolsista: true},
    { nome : 'Pedro', nota: 9.8, bolsista: false},
    { nome : 'Ana', nota: 8.7, bolsista: true},

]

//Desafio 1: Todosos alunos são bolsista?

const todosBolsistas = (result, bolsista) => result && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2: Algum aluno é bolsista?

const algumBolsista = (result, bolsista) => result || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
