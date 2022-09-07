let usuario = {
  nome: 'elder',
  idade: 26,
  excluir: function() {
    console.log(`usuario excluido: ${this.nome}. boa tarde!`);
  }
}

usuario.excluir()