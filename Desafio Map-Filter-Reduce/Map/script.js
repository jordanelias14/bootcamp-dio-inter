const arr_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MULTIPLICA = {
  value: 2,
};

const DIVIDE = {
  value: 2,
};

//Sintaxe Map sem This

function mapSemThis(arr) {
  return arr.map((item) => item * 2);
}

console.log(mapSemThis(arr_nums));

function mapComThis(arr, thisArgument) {
  return arr.map(function (item) {
    const operacao = [];
    if (thisArgument == MULTIPLICA) {
      operacao.push(item * this.value);
      return operacao;
    }
    operacao.push(item / this.value);
    return operacao;
  }, thisArgument);
}

console.log("Cesta de Frutas", mapComThis(arr_nums, DIVIDE));
