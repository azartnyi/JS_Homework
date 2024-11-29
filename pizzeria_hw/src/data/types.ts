import { PIZZA_NAMES } from "./receipts";
import { TOPPINGS } from "./prices";

export interface IMeal {
  readonly name: string;
  getPrice(): number;
  /*
  Поле name которое нельзя менять
  метод getPrice возвращающий число
  */
}

export enum DOUGH_TYPE {
  CLASSIC = "Classic",
  THIN = "Thin",
}
// Енам с видами теста

export enum PIZZA_SIZE {
  SMALL = "Small",
  MEDIUM = "Medium",
  LARGE = "Large",
}
// Енам с размерами пиццы
