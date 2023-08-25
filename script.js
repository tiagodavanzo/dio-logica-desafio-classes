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
