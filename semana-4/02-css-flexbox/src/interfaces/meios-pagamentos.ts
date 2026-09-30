export interface PagamentoPix {
  metodo: "PIX";
  chave: string;
}

export interface PagamentoCartãoCredito {
  metodo: "CARTAO";
  numeroCartao: string;
  parcelas: string;
}

export interface PagamentoBoleto {
  metodo: "BOLETO";
  codigoBarra: string;
}

export type MeioPagamento =
  | PagamentoPix
  | PagamentoCartãoCredito
  | PagamentoBoleto;
