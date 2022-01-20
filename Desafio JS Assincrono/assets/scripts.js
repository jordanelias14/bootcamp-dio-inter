const API = "https://thatcopy.pw/catapi/rest/";
const catBtn = document.getElementById("change-cat");

//JS Assíncrono
const getCat = async () => {
  const res = await fetch(API); // espera a consulta a API
  const data = await res.json(); // espera a conversão para JSON

  return data.webpurl; // retorna uma chave do objeto
};

const loadImg = async () => {
  // função assíncrona
  const catImg = document.getElementById("cat"); // Pega o elemento img pelo id
  catImg.src = await getCat(); // adiciona no src da img o retorno da getCat
};

catBtn.addEventListener("click", loadImg); //adicona o evento de click no botão

loadImg(); // chama a função inicial
