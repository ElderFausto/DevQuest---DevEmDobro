let addList = () => {
  let valueInput = document.getElementsByName('novo-comentario');
   
  let typedText = valueInput[0].value;

  let textInput = document.getElementById('novos-comentarios')

  textInput.innerHTML += `<ul><li>${typedText}</li></ul>`
  
}