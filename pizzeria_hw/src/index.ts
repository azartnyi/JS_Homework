// Пример проверки работы системы ниже. Вы можете сделать его иным или более сложным на ваше усмотрение

import { Pizzeria } from "./pizzeria/pizzeria";
import { PIZZA_NAMES } from "./data/receipts";
import { DOUGH_TYPE, PIZZA_SIZE } from "./data/types";
import { Order } from "./order/order";

const pizzeria = new Pizzeria("Alex Pizzeria", 'Mira 42', "8-20", []);

const order = pizzeria.createOrder();
order.addPizza(PIZZA_NAMES.PEPPERONI, DOUGH_TYPE.CLASSIC, PIZZA_SIZE.LARGE);
order.addPizza(PIZZA_NAMES.HAWAII, DOUGH_TYPE.CLASSIC, PIZZA_SIZE.LARGE, ["bacon", "basil"]);

console.log("Meals in order:", order.getMeals());
console.log("Full price of order:", order.getFullPrice());

pizzeria.removeOrder(order.orderNumber);
console.log("Order removed. Remaining orders:", pizzeria.getOrder(order.orderNumber));

const removedOrder = pizzeria.getOrder(order.orderNumber);
if (removedOrder === null) {
  console.log("Order removed successfully.");
} else {
  console.log("Error: Order was not removed.");
}