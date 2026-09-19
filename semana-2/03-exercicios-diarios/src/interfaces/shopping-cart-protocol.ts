import type { CardItem } from "./card-item.js";

export interface ShoppingCartProtocol {
  items: Readonly<CardItem[]>;
  addItem(item: CardItem): void;
  removeItem(id: string): void;
  total(): number;
  totalWithDiscount(): void;
  isEmpty(): boolean;
  clear(): void;
}
