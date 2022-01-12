function newPassword(a, b) {
  let str1 = a;
  let str2 = b;
  let password = [];
  let tamanho = (str1 + str2).length;
  let i = 0;

  while (i < tamanho / 2) {
    password += str1[i];
    password += str2[i];

    console.log("password:", password);
    i++;
  }
}

console.log(newPassword("hackerrank", "mountain"));
