const calcularValorPedido = require('./calcularPedido')

it('nao deve cobrar valor do frete quando valor for superior a 500', () => {

  //AAA - 3 passos criação de um teste

  // 1 Arrange - arrumar
  const meuPedido = {
    itens: [
      { nome: "poção de vida", valor: 2000 },
      { nome: "entrega", valor: 100, entrega: true },
    ],
  };

  // 2 act - ação
  const resultado = calcularValorPedido(meuPedido)

  // 3 assert - resultado esperado
  expect(resultado).toBe(2000)
})

it('deve cobrar valor de frete quando o valor for menos que 500', () => {
  // arrange
  const meuPedido = {
    itens: [
      { nome: "sanduiche", valor: 50 },
      { nome: "entrega", valor: 100, entrega: true },
    ],
  };

  // act
  const resultado = calcularValorPedido(meuPedido)

  //assert
  expect(resultado).toBe(150)
})

it('deve cobrar valor se o produto for exatamente 500', () => {
  const meuPedido = {
    itens: [
      { nome: "bolo", valor: 400 },
      { nome: "entrega", valor: 100, entrega: true },
    ],
  };

  const resultado = calcularValorPedido(meuPedido)

  expect(resultado).toBe(500)
})

// caso os estados de entrega sejam  PE ou PB, deve ser acrescido um valor de 30% na entrega
it('deve adicionar um acrescimo de 20% no valor da entrega do pedido', () => {
  const meuPedidoEstado = {
    estado: 'PE',
    itens: [
      { nome: "bolo", valor: 400 },
      { nome: "entrega", valor: 100, entrega: true },
    ],
  };
  const resultado = calcularValorPedido(meuPedidoEstado)

  expect(resultado).toBe(500)
})

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido', () => {
  const meuPedidoEstadoPB = {
    estado: 'PB',
    itens: [
      { nome: "bolo", valor: 400 },
      { nome: "entrega", valor: 100, entrega: true },
    ],
  };
  const resultado = calcularValorPedido(meuPedidoEstadoPB)

  expect(resultado).toBe(500)
})