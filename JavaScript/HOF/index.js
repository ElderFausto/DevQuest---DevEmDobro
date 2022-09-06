const calcularAnoDeNascimento = function(idade, mesDeNascimento, imprimir) {
  const mesAtual = 9
  let anoDeNascimento = 2022 - idade
  if(mesDeNascimento > mesAtual) anoDeNascimento--;
  imprimir(anoDeNascimento)
}

let imprimirAnoDeNascimento = anoDeNascimento => {
  console.log(`Seu ano de nascimento é: ${anoDeNascimento}`);
}

calcularAnoDeNascimento(26, 8, imprimirAnoDeNascimento)


function multiplicar (multiplicador) {
  return function(numero) {
    return numero * multiplicador
  }
}

let dobrar = multiplicar(2);
let triplicar = multiplicar(3);
let quadruplicar = multiplicar(4);

console.log(dobrar(50));

console.log('------------------------*----------------------------');


function dividir(divisor) {
  return function(numero) {
    return numero / divisor;
  }
}

let divisorPar = dividir(2);
let divisorImpar= dividir(3);

console.log(divisorPar(10));

