function getAdmins(map) {
  let pessoas = new Object();
  let admins = [];
  let users = [];
  for ([key, value] of map) {
    if (value == "Admin") {
      admins.push(key);
      pessoas.ADM = admins;
    } else {
      users.push(key);
      pessoas.USUARIO = users;
    }
  }
  return pessoas;
}
const usuarios = new Map();
usuarios.set("Jordan", "Admin");
usuarios.set("Teresa", "Admin");
usuarios.set("Lucas", "User");
usuarios.set("Michael", "User");
usuarios.set("André", "Admin");
usuarios.set("Luana", "Admin");
usuarios.set("Maria", "User");

console.log(getAdmins(usuarios));

//Properties Map

//.set para adicionar
//.get para recuperar
//.delete para apagar
