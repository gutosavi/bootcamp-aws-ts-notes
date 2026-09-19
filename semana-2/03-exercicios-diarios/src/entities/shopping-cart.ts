import type { CardItem } from "../interfaces/card-item.js";
import type { DiscountProtocol } from "../interfaces/discount-protocol.js";
import type { ShoppingCartProtocol } from "../interfaces/shopping-cart-protocol.js";

export class ShoppingCart implements ShoppingCartProtocol {
  private _items: CardItem[] = [];

  constructor(private readonly discountStrategy: DiscountProtocol) {}

  get items(): Readonly<CardItem[]> {
    return this._items;
  }

  addItem(item: CardItem): void {
    this._items.push(item);
  }

  removeItem(id: string): void {
    this._items = this._items.filter((item) => item.id !== id);
  }

  total(): number {
    return +this._items.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discountStrategy.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
