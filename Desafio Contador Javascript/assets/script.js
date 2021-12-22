const CURRENT_NUMBER_ID = document.getElementById("currentNumber");
var contador = 0;

//Contando de 0 a 10

// function increment() {
//   contador += 1;
//   if (contador >= 10) {
//     CURRENT_NUMBER_ID.innerHTML = 10;
//   } else {
//     CURRENT_NUMBER_ID.innerHTML = contador;
//   }
// }

// function decrement() {
//   contador -= 1;

//   if (contador <= 0) {
//     CURRENT_NUMBER_ID.innerHTML = 0;
//   } else {
//     CURRENT_NUMBER_ID.innerHTML = contador;
//   }
// }

//Mudando a cor conforme valores negativos ou acima de 10

function increment() {
  contador += 1;
  var corSpan = document.getElementsByTagName("span")[0];

  if (contador >= 10) {
    corSpan.style.color = "blue";
  }
  if (contador >= 0 && contador < 10) {
    corSpan.style.color = "black";
  }
  CURRENT_NUMBER_ID.innerHTML = contador;
}

function decrement() {
  contador -= 1;
  var corSpan = document.getElementsByTagName("span")[0];

  if (contador <= 0) {
    corSpan.style.color = "red";
  }
  if (contador >= 0 && contador < 10) {
    corSpan.style.color = "black";
  }
  CURRENT_NUMBER_ID.innerHTML = contador;
}
