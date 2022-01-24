//Usando o método Filter

const SEQUENCIA = [2, 3, 5, 6, 8, 9, 12, 13, 50, 55, 51, 31, 14];

function retornaPares(arr) {
  return arr.filter((item) => {
    return item % 2 === 0;
  });
}
console.log(retornaPares(SEQUENCIA));
