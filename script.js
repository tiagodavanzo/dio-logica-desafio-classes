<<<<<<< HEAD
console.log("Classificador de Nível de Herói");

let nome = "Thor";
let xp = 500;
let nivel = "";

if (xp < 1000) nivel = "Ferro";
else if (xp >= 1001 && xp <= 2000) nivel = "Bronze";
else if (xp >= 2001 && xp <= 5000) nivel = "Prata";
else if (xp >= 6001 && xp <= 7000) nivel = "Ouro";
else if (xp >= 7001 && xp <= 8000) nivel = "Platina";
else if (xp >= 8001 && xp <= 9000) nivel = "Ascendente";
else if (xp >= 9001 && xp <= 10000) nivel = "Imortal";
else if (xp >= 10001) nivel = "Radiante";
else nivel = "-";

let mensagem =
  nivel !== "-"
    ? `O Herói de nome ${nome} está no nível de ${nivel}`
    : `O Herói de nome ${nome} não tem nível definido`;

console.log(mensagem);
=======
class hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
    switch (this.type) {
      case "mago":
        this.attackType = "magia";
        break;
      case "guerreiro":
        this.attackType = "espada";
        break;
      case "monge":
        this.attackType = "artes marciais";
        break;
      case "ninja":
        this.attackType = "shuriken";
        break;
    }
  }

  attack() {
    console.log(`O ${this.type} atacou usando ${this.attackType}`);
  }
}

let mago = new hero("Gandalf", 100, "mago");
mago.attack();

let guerreiro = new hero("Conan", 30, "guerreiro");
guerreiro.attack();

let ninja = new hero("Gaiden", 20, "ninja");
ninja.attack();
>>>>>>> b0c62a7 (Desafio classe hero)
