function fourthBit(number) {
  let num = number;
  let binary = (num % 2).toString();
  let cont = 0;
  let quartoNumero;
  while (num > 1) {
    num = parseInt(num / 2);

    binary = (num % 2) + binary;
    console.log(`binary: ${binary}`);
    cont++;
    if (cont == 3) {
      quartoNumero = num % 2;
      console.log(`quartoNumero: ${quartoNumero}`);
    }
  }
  return binary;
}
console.log(fourthBit(23));
