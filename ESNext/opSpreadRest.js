// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto

const func = { nome: 'Maria', salario: 1248.99 }
const clone = { ativo: true, ...func }
console.log(clone);

// usar spread com array
const grupA = ['João', 'Pedro', 'Gloria']
const grupFinal = ['Maria', 'Rafaela', ...grupA]
console.log(grupFinal);
