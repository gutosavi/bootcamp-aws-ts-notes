import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter.js";
import MercadoPago from "./mercadoPago/MercadoPago.js";
import type IPayPalPayment from "./paypal/IPayPayPayment.js";

// const payment: IPayPalPayment = new PayPal();
// const payment: IPayPalPayment = new PayoneerAdapter(new Payoneer());
const payment: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago());

payment.paypalPayment();
payment.paypalReceive();
