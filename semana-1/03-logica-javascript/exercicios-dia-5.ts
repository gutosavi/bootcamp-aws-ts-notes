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
