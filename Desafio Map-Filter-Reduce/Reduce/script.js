//Somar numeros de um array com REDUCE

const SEQUENCIA = [7, 15, 12, 11];

function somaNumeros(arr) {
  return arr.reduce((prev, current) => {
    console.log(`prev: ${prev}`);
    console.log(`current: ${current}`);
    return prev + current;
  });
}
console.log(somaNumeros(SEQUENCIA));

//Calcula quanto sobra de saldo ao pagar os itens da lista
const LISTA = [
  {
    nome: "carro",
    valor: 75000,
  },
  {
    nome: "telefone",
    valor: 4000,
  },
  {
    nome: "perfume",
    valor: 450,
  },
];

const SALDO_DISPONIVEL = 82000;

function calculaSaldo(list, saldo) {
  return list.reduce((prev, current) => {
    return prev - current.valor;
  }, saldo);
}
console.log("------------------------");
console.log("Saldo Restante: ", calculaSaldo(LISTA, SALDO_DISPONIVEL));
