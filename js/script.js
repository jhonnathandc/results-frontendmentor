const categoryList = document.querySelector(".category-list");

function summaryJson() {
  fetch("../data.json")
    .then((response) => response.json())
    .then((conteudoJson) => {
      let soma = 0;

      conteudoJson.forEach((conteudo) => {
        const category = conteudo.category;
        const score = conteudo.score;
        const icon = conteudo.icon;

        soma = soma + conteudo.score;

        createSummary(category, icon, score);
        result(soma);
      });
    });
}
summaryJson();

function createSummary(category, icon, score) {
  return (categoryList.innerHTML += `<div class='category ${category.toLowerCase()}'>
      <div>
        <img src='${icon}' alt='${category}'>
        <p class='title-category'>${category}</p>
      </div>
      <p>${score}&#160; <span> / 100</span></p>
    </div>`);
}

const resultNumber = document.querySelector(".number-result");

function result(soma) {
  const somaTotal = (soma / 4).toFixed();
  let incremento = 0;

  const animaScore = setInterval(() => {
    incremento++;
    resultNumber.innerText = incremento;

    if (incremento > somaTotal) {
      resultNumber.innerText = somaTotal;
      clearInterval(animaScore);
    }
  }, 15);
}
