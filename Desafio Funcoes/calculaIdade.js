const Jordan = {
  nome: "Jordan",
  nota: 10,
  idade: 24,
};
const Luara = {
  nome: "Luara",
  nota: 10,
  idade: 23,
};
const Mateus = {
  nome: "Mateus",
  nota: 5,
  idade: 25,
};
const Joao = {
  nome: "João",
  nota: 6,
  idade: 25,
};

function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}
console.log(calculaIdade.call(Jordan, 3));
console.log(calculaIdade.apply(Mateus, [2]));
