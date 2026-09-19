import type { DiscountProtocol } from "../interfaces/discount-protocol.js";

abstract class Discount implements DiscountProtocol {
  abstract calculate(valor: number): number;
}

export class FiftyPercentDiscount extends Discount {
  private readonly discount = 0.5;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class ThirtyPercentDiscount extends Discount {
  private readonly discount = 0.3;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class TwentyPercentDiscount extends Discount {
  private readonly discount = 0.2;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class TenPercentDiscount extends Discount {
  private readonly discount = 0.1;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}
