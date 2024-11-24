
import { PIZZA_SIZE } from "./types";

//Енам с названиями ваших пицц
export enum PIZZA_NAMES {
MARGHERITA = "MARGHERITA",
PEPPERONI = "PEPPERONI",
MEAT = "MEAT",
HAWAII = "HAWAII",
DIABLO = "DIABLO",
}

export const pizzaReceipts = {
  MARGHERITA: {
    toppings: ["cheese", "red_sauce", "basil"],
    prices: {
      [PIZZA_SIZE.SMALL]: 50,
      [PIZZA_SIZE.MEDIUM]: 75,
      [PIZZA_SIZE.LARGE]: 100
    }
  },
  PEPPERONI: {
    toppings: ["pepperoni", "cheese", "red_sauce",],
    prices: {
      [PIZZA_SIZE.SMALL]: 60,
      [PIZZA_SIZE.MEDIUM]: 90,
      [PIZZA_SIZE.LARGE]: 120
    } 
  },
  MEAT : {
    toppings: ["pepperoni", "cheese", "red_sauce", "bacon"],
    prices: {
      [PIZZA_SIZE.SMALL]: 65,
      [PIZZA_SIZE.MEDIUM]: 95,
      [PIZZA_SIZE.LARGE]: 125
    }
  },
  HAWAII : {
    toppings: ["pinapples", "cheese", "chicken", "white_sauce"],
    prices: {
      [PIZZA_SIZE.SMALL]: 70,
      [PIZZA_SIZE.MEDIUM]: 100,
      [PIZZA_SIZE.LARGE]: 130
    }
  },
  DIABLO : {
    toppings: ["pepperoni", "cheese", "red_sauce", "bacon", "hot_pepper", "halapenjo"],
    prices: {
      [PIZZA_SIZE.SMALL]: 75,
      [PIZZA_SIZE.MEDIUM]: 105,
      [PIZZA_SIZE.LARGE]: 135
    }
  }
};  
  /*
  Тут нужно хранить рецепты ваших пицц со всеми необходимыми полями. Пример:
  Margherita: {
    toppings: ["ceese", "tomato"],
    prices: {
      small: 50,
      medium: 75,
      large: 100
    }
  }
    Попробуйте использовать тут имеющиеся енамы
  */

