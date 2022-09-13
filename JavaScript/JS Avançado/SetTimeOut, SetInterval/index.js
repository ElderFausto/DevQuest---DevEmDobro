/* setTimeout(() => {
  console.log('ola mundo');
}, 3000) */

let idDoIntervalo = setInterval(() => {
  console.log('boa tarde, elder');  
}, 2000);

console.log(idDoIntervalo);
clearInterval(idDoIntervalo)

