/* 
estados promises:

Pendente
Realizada
Recusada
Estabelecida
*/

// new Promise((resolve, reject) => {

// })



let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if(chaleiraEstaNoFogao && fogaoEstaLigado) {
      console.log('fervendo agua');
      resolve()
    } else {
      console.log('necessario ligar o fogao');
      reject()
    }
  })
}

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = false;

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)