import { Pizza } from "../meal/pizza";
import { DOUGH_TYPE, PIZZA_SIZE, IMeal } from "../data/types";
import { PIZZA_NAMES } from "../data/receipts";
import { ERROR_MESSAGES } from "../data/messages";
import { TOPPINGS } from "../data/prices";

export class Order {
  constructor(
    public orderNumber: number,
    public meals: IMeal[] = [],
  ) {

  }

        /** 
    Метод добавляет пиццу в заказ. 
    Параметры:
      - название пиццы
      - вид теста
      - размер пиццы
      - дополнительные топпинги (необязательный параметр)
    Возвращает текущий объект заказа
    */
  addPizza(
    name: keyof typeof PIZZA_NAMES,
    doughType: DOUGH_TYPE,
    size: PIZZA_SIZE,
    additionalToppings: (keyof typeof TOPPINGS)[] = [],
  ): this {
    if (!PIZZA_NAMES[name]) {
      throw new Error(ERROR_MESSAGES.PIZZA_NOT_FOUND);
    }

    const pizza = new Pizza(name, doughType, size, additionalToppings);
    this.meals.push(pizza);
    return this;
  }

    /**
    * Возвращает все блюда в заказе
    **/
  getMeals(): IMeal[] {
    return this.meals;
  }

    //Возвращает полную стоимость заказа (сумма стоимости всех блюд)  
  getFullPrice(): number {
    return this.meals.reduce((total, meal) => total + meal.getPrice(), 0);
  }

  removeFromOrder(mealName: string): void {
    //Метод удаляет блюдо из заказа по его имени
    //Принимает на вход имя блюда
    this.meals = this.meals.filter((meal) => meal.name !== mealName);

  }
}
