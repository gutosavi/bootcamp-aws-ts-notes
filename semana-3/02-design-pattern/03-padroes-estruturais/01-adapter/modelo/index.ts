import PayoneerAdapter from "./adapters/PayoneerAdapter.js";
import Payoneer from "./payoneer/Payoneer.js";
import type IPayPalPayment from "./paypal/IPayPayPayment.js";

// const payment: IPayPalPayment = new PayPal();
const payment: IPayPalPayment = new PayoneerAdapter(new Payoneer());

payment.paypalPayment();
payment.paypalReceive();
