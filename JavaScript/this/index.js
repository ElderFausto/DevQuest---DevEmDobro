'use strict' // o uso estrito server para nao vazar algo global para dentro de um escopo

// this.name = 'elder'

// function ola() {
//   console.log(`this no contexto da funcao ${this.name}`);
// }

// ola()


// let usuario = {
//   nome: 'elder',
//   saudar: function() {
//     console.log(`this no contexto do metodo ${this}`);

//     console.log(`this.nome no contexto do metodo ${this.nome}`);
//   }
// }

// usuario.saudar()

let comida = {
  nome: 'galeto',
  temperatura: 200,
}


comida.cozinhar = function(temperaturaDeCozimento) {
  this.temperatura = temperaturaDeCozimento;
}

console.log(comida);

comida.cozinhar(400)

console.log(comida);