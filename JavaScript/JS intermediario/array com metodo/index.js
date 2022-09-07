 let carro1 = {
  nome: 'fusca',
  ano: 1990
 } 

 let carro2 = {
  nome: 'ferrari',
  ano: 2002
 }

 let carros = [carro1, carro2]

 console.log(carros[1].ano);

 console.log('---------------------------------------------------------------');


 let jogo1 = {
  nome: 'valorant'
 }

 let jogo2 = {
  nome: 'lol'
 }

 let jogo3 = {
  nome: 'rumble'
 }

 let videoGame = {
  nome: 'xbox',
  valor: 3000,
  jogos: [jogo1, jogo2, {nome: 'dota'}]
 }

 videoGame.jogos.push(jogo3)

 console.log(videoGame);