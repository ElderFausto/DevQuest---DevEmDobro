document
.querySelector('select[name="estado"]')
.addEventListener('change', function(e) {
  console.log(e.target.value);
})

document
.querySelector('input[id="lista1"]')
.addEventListener('change', function(e) {
    console.log(e.target.value);
})

document
.querySelector('input[id="lista2"]')
.addEventListener('change', function(e) {
    console.log(e.target.value);
})