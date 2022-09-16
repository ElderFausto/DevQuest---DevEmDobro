const meuPedido = {
  itens: [
    { nome: "poção de vida", valor: 100 },
    { nome: "espada de prata", valor: 1000 },
    { nome: "entrega", valor: 40, entrega: true },
  ],
};

const calcularValorPedido = (pedido) => {
  const valorProdutos = pedido.itens
    .filter((item) => !item.entrega)
    .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0);

  const entrega = pedido.itens.filter((item) => item.entrega);

  if (valorProdutos > 500) {
    return valorProdutos;
  } else {
    return valorProdutos + entrega[0].valor;
  }
};

console.log(calcularValorPedido(meuPedido));
