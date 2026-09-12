/*
Exercícios práticos de revisão — Dia 5
 
Conteúdos praticados:
 - Classes
 - Herança
 - Interfaces
 - Encapsulamento
 - Polimorfismo
 */

// Encapsulamento com Validação

class ContaBancaria {
  #saldo: number;

  constructor(saldoInicial = 0) {
    this.#saldo = saldoInicial;
  }

  depositar(valor: number): void {
    if (valor <= 0) throw new Error("Valor do depósito inválido.");

    this.#saldo += valor;
    console.log(`Depósito efetuado com sucesso. Novo saldo: ${this.#saldo}`);
  }

  sacar(valor: number): void {
    if (this.#validarSaldo(valor)) throw new Error("Saldo insuficiente.");

    this.#saldo -= valor;
    console.log(`Saque efetuado. Novo saldo: ${this.#saldo}`);
  }

  consultarSaldo(): number {
    return this.#saldo;
  }

  #validarSaldo(valor: number): boolean {
    return valor > this.#saldo;
  }
}

const novaConta = new ContaBancaria(100);
novaConta.depositar(50);

try {
  novaConta.sacar(160);
} catch (err) {
  if (err instanceof Error) console.error(err.message);
}

console.log(novaConta.consultarSaldo());

// Herança e Sobrescrita com override

class Funcionario {
  constructor(
    public nome: string,
    public salarioBase: number,
  ) {}

  calcularSalario(): number {
    return this.salarioBase;
  }
}

class Gerente extends Funcionario {
  constructor(
    nome: string,
    salarioBase: number,
    public bonusFixo: number,
  ) {
    super(nome, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase + this.bonusFixo;
  }
}

const funcionario1 = new Funcionario("Carlos", 3000);
console.log("Funcionário Carlos:", funcionario1.calcularSalario());
console.log(`--------`);
const gerente = new Gerente("Daniel", 5000, 1500);
console.log("Gerente Daniel:", gerente.calcularSalario());
console.log(`--------`);

// Polimorfismo com interfaces

interface CanalNotificacao {
  enviar(mensagem: string): void;
}

class NotificacaoEmail implements CanalNotificacao {
  enviar(msg: string): void {
    console.log(`[E-MAIL] enviando: ${msg}`);
  }
}

class NotificacaoSMS implements CanalNotificacao {
  enviar(msg: string): void {
    console.log(`[SMS] enviando: ${msg}`);
  }
}

function dispararMensagem(canais: CanalNotificacao[], mensagem: string): void {
  return canais.forEach((canal) => canal.enviar(mensagem));
}

const canaisDeEnvio: CanalNotificacao[] = [
  new NotificacaoEmail(),
  new NotificacaoSMS(),
];

dispararMensagem(canaisDeEnvio, "Este é o polimorfismo em ação.");
