import type { MessagingProtocol } from "../interfaces/messaging-protocol.js";
import type { PersistencyProtocol } from "../interfaces/persistency-protocol.js";
import type { ShoppingCartProtocol } from "../interfaces/shopping-cart-protocol.js";
import type { OrderStatus } from "../types/order-status.js";

export class Order {
  private _orderStatus: OrderStatus = "OPEN";

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      throw new Error("O carrinho está vazio.");
    }

    this._orderStatus = "CLOSED";

    this.persistency.saveOrder();
    this.messaging.sendMessage(
      `O seu pedido no valor de R$ ${this.cart.totalWithDiscount()} foi processado.`,
    );
    this.cart.clear();
  }
}
