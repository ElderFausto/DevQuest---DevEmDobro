let ordens = [
  { cliente: "Elder", tipo: "compra", quantidade: 20, ativo: "JNUYE1" },
  { cliente: "Maria", tipo: "compra", quantidade: 80, ativo: "KNPYK8" },
  { cliente: "José", tipo: "venda", quantidade: 50, ativo: "XOJL80" },
];

let quantidadeDeOrdens = ordens.reduce(
  (SomaDeOrdens, ordem) => SomaDeOrdens + ordem.quantidade,
  0
);

console.log(quantidadeDeOrdens);
