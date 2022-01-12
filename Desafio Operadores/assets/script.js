//função que recebe dois numeros como parametros e verifica se são iguais
const funcao = (n1, n2) => {
  n1 === n2
    ? console.log("Os numeros", n1, "e", n2, "são iguais")
    : console.log("Os numeros", n1, "e", n2, "são diferentes");

  const soma = n1 + n2;
  soma > 10
    ? console.log("A soma", soma, "é maior que 10")
    : console.log("A soma", soma, "é menor que 10");
  soma > 20
    ? console.log("A soma", soma, "é maior que 20")
    : console.log("A soma", soma, "é menor que 20");
};
funcao(12, 12);
