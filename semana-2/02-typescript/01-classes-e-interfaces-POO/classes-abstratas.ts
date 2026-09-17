// Classes abstratas

export abstract class Personagem {
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    if (personagem.vida <= 0) {
      console.log(`${personagem.nome} está morto. Não pode mais ser atacado.`);
      return;
    }

    console.log(`O ${this.nome} está atacando...`);
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    if (this.vida <= 0) {
      console.log(`${this.nome} morreu.`);
      return;
    }

    console.log(`O ${this.nome} está com ${this.vida} vida agora.`);
    this.vida -= forcaAtaque;
  }

  // ao classificar essa função como abstract, eu obrigo as classes filhas a usarem esta função

  bordao(): void {
    // caso eu não queria classificar como abstract, eu posso retornar algo nessa função e sobrescrever usando override na classe filha
    console.log("Esta linha será sobrescrita pelas classes filhas");
  }
}

export class Guerreiro extends Personagem {
  override bordao(): void {
    console.log(`${this.nome} ATACANDOOOO...`);
  }
}
export class Monstro extends Personagem {
  override bordao(): void {
    console.log(`Eu sou o ${this.nome} - O MAIS FORTEEEE!`);
  }
}

const guerreiro = new Guerreiro("Guerreiro", 95, 1000);
const monstro = new Monstro("Monstro", 100, 1500);

guerreiro.atacar(monstro);
guerreiro.atacar(monstro);
guerreiro.atacar(monstro);
console.log("-----");
monstro.atacar(guerreiro);
monstro.atacar(guerreiro);
monstro.atacar(guerreiro);
monstro.atacar(guerreiro);
monstro.atacar(guerreiro);
monstro.atacar(guerreiro);
monstro.atacar(guerreiro);
monstro.atacar(guerreiro);
monstro.atacar(guerreiro);
monstro.atacar(guerreiro);
monstro.atacar(guerreiro);
