import { Meal } from "./meal";
import { DOUGH_TYPE, PIZZA_SIZE } from "../data/types";
import { TOPPINGS } from "../data/prices";
import { pizzaReceipts, PIZZA_NAMES } from "../data/receipts";
// Класс должен наследовать класс Meal

export class Pizza extends Meal {
  private doughType: DOUGH_TYPE;
  private size: PIZZA_SIZE;
  private additionalToppings:(keyof typeof TOPPINGS)[];
  private baseToppings: (keyof typeof TOPPINGS)[];
  
  constructor(
    /*
    Конструктор принимает:
    - название пиццы
    - базовую цену
    - базовые топпинги
    - вид теста
    - размер пиццы
    - дополнительные топпинги (необязательный параметр)
    
    Также в конструкторе происходит подсчет цены пиццы методом calculatePrice
    */

    name: keyof typeof PIZZA_NAMES,
    doughType: DOUGH_TYPE,
    size: PIZZA_SIZE,
    additionalToppings:(keyof typeof TOPPINGS)[] = []
  ) {
    const receipt = pizzaReceipts[name];
    const basePrice = receipt.prices[size];
    super(name, basePrice);

    this.doughType = doughType;
    this.size = size;
    this.baseToppings = receipt.toppings as (keyof typeof TOPPINGS)[];;
    this.additionalToppings = additionalToppings;

    this.calculatePrice();
  }




  calculatePrice(): number {
    // Считаем финальную стоимость пиццы с учетом размера и дополнительных топпингов

    const toppingCost = [...this.baseToppings, ...this.additionalToppings].reduce(
      (acc, topping) => acc + (TOPPINGS[topping] || 0),
      0);

    this.basePrice = this.basePrice + toppingCost;
    return this.basePrice;
  }
}
