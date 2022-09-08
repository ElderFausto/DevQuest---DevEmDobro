let adicionarComentario = () => {
  let inputComment = document.getElementsByName("novo-comentario");
  let typedText = inputComment[0].value;

  let newsComments = document.getElementById("novos-comentarios");

  newsComments.innerHTML += `<p>Novo comentario: ${typedText}</p>`

};
