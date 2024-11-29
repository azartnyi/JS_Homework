import { PIZZA_NAMES } from "../data/receipts";
import { Order } from "../order/order";

export class Pizzeria {
  // Класс должен хранить приватный массив заказов
  private name: string;
  private address: string;
  private workingHours: string;
  private orders: Order[] = []

  constructor(
    name: string, 
    address: string, 
    workingHours: string, 
    orders?: []
  ) {
      this.name = name;
      this.address = address;
      this.workingHours = workingHours;
      this.orders = orders || [];
    /* 
    Конструктор принимает:
    - name: название заведения
    - address: адрес
    - orders: массив заказов (опционально)
    - workingHours: время работы
    */
  }

  createOrder(): Order {
    const orderNumber = this.orders.length
    ? this.orders[this.orders.length - 1].orderNumber + 1
    : 1;

  const order = new Order(orderNumber);
  this.orders.push(order);
  return order;
    // метод, создающий заказ (использовать класс Order), складывает в массив и возвращает созданный заказ
    // номер заказа можно генерировать с использованием Date.now() либо высчитывать последовательно от 1
  }

  getOrder(orderNumber: number): Order | null {
    return this.orders.find((order) => order.orderNumber === orderNumber) || null;
  }
    /*
    Метод для получения заказа по его номеру.
    Принимает на вход номер заказа
    Если заказ не найден вернуть null
    */
  

    removeOrder(orderNumber: number): void {
      this.orders = this.orders.filter((order) => order.orderNumber !== orderNumber);
  }
    //Метот для удаления заказа по номеру, не возвращает ничего
}
