const alunos = [
  {
    nome: "Jordan",
    nota: 10,
    idade: 24,
  },
  {
    nome: "Luara",
    nota: 10,
    idade: 23,
  },
  {
    nome: "Mateus",
    nota: 5,
    idade: 25,
  },
  {
    nome: "João",
    nota: 6,
    idade: 25,
  },
];

function alunosAprovados(arr, media) {
  let aprovados = [];

  for (let i in arr) {
    const { nome, nota, idade } = arr[i];

    if (nota >= media) {
      console.log(`O aluno ${nome}, com idade ${idade}, entrou no array`);
      aprovados.push(nome);
    }
  }
  return aprovados;
}

console.log("Alunos aprovados", alunosAprovados(alunos, 6));
