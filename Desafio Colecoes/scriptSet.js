const meuArr = [5, 6, 5, 7, 5, 50, 5, 55, 50, 100, 32, 33, 32];

function valoresUnicos(arr) {
  const set = new Set(arr);

  return [...set]; //cada elemento do set adiciona no novo array
}

console.log(valoresUnicos(meuArr));
