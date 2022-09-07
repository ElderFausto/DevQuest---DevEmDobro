let frutas = ['banana', 'laranja', 'uva', 'pera']

let frutasExtraidas = frutas.slice(1, 3)

console.log(frutasExtraidas);


let cores = ['vermelho', 'verde', 'azul', 'roxo', 'preto']

// let coresExtraidas = cores.splice(1, 2) remove os itens 1 e 2

let coresExtraidas = cores.splice(1, 2, 'marrom', 'laranja', 'amarelo')


console.log(coresExtraidas);
console.log(cores);