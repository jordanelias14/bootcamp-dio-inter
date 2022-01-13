// TRY CATCH THROW FINALLY
function verificaPalindromo(string) {
  if (!string) {
    return "String inválida";
  }
  return string.split("");
}

//console.log(verificaPalindromo("Sem erros"));

function verificaCPF(string) {
  if (!string) {
    throw "CPF inválido";
  }
  return string.split("");
}

//console.log(verificaCPF("07800036594"));

function verificaCEP(string) {
  if (!string) {
    throw "CPF inválido";
  }
  return string.split("");
}

function tryVerificaCEP(string) {
  try {
    verificaCEP(string);
  } catch (e) {
    console.log(e);
  }
}
tryVerificaCEP("");
