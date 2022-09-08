// *** seleção por ID ***

let p = document.getElementById('paragrafo1');

console.log(p);

// ----------------------------------------------------------------

// ** seleção por Classe ***

let inputPorClasse = document.getElementsByClassName('tag-de-input')

console.log(inputPorClasse[0]);

// ----------------------------------------------------------------

// ** seleção por Tag ***

let inputPorTag = document.getElementsByTagName('input')
console.log(inputPorTag);

// -------------------------------------------------------------------

// ** seleção por Nome ***

let inputPorName = document.querySelectorAll('input[name="email"]')
console.log(inputPorName[1]);