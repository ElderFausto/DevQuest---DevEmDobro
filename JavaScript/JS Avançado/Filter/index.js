let pessoas = [
  {nome : 'Elder', idade: 26},
  {nome: 'Maria', idade: 33},
  {nome: 'Jose', idade: 33}
]

let PessoasComIdade33 = pessoas.filter((pessoa) => pessoa.idade === 33)

console.log(PessoasComIdade33);