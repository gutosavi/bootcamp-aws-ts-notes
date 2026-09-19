import { Messaging } from "./entities/messaging.js";
import { Order } from "./entities/orders.js";
import { Persistency } from "./entities/persistency.js";
import { ShoppingCart } from "./entities/shopping-cart.js";
import { TenPercentDiscount } from "./services/discount.js";

const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem({ id: "1", name: "Monitor", price: 1200 });
shoppingCart.addItem({ id: "2", name: "Processador", price: 1000 });
shoppingCart.addItem({ id: "3", name: "Placa de Vídeo", price: 3200 });

shoppingCart.removeItem("2");

console.log(shoppingCart);

console.log("Status Ordem:", order.orderStatus);
console.log("Total a pagar:", shoppingCart.total());
console.log("Preço com desconto:", shoppingCart.totalWithDiscount());

order.checkout();
