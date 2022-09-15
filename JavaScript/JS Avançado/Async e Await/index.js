let chaleiraNoFogao = true;
let fogaoLigado = true;

let ferverAgua = (chaleiraNoFogao, fogaoLigado) => {
  return new Promise((resolve, reject) => {
    if (chaleiraNoFogao && fogaoLigado) {
      console.log("agua foi fervida");
      resolve(true);
    } else {
      console.log(
        "necessario colocar a chaleira com agua e ligar o fogao senao n sera feito"
      );
      reject()
    }
  });
};

async function inicarCafe() {
  const aguaFervida = await ferverAgua(chaleiraNoFogao, fogaoLigado);
  console.log(aguaFervida);
}

inicarCafe();
