let frutas = ["abacate", "banana", "limao", "laranja"];

/* for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta: ${frutas[i]}`);
}

console.log('____________________________________________');

frutas.forEach((item, indice, array) => {
  console.log(`Fruta: ${item}`);
})
 */

frutas.push('morango')
frutas.unshift('lixia')
frutas.shift()
frutas.pop()

let posicaoLimao = frutas.indexOf('limao')
console.log(posicaoLimao);

console.log(frutas);