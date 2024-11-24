import { IMeal } from "../data/types";

// Класс должен имплементировать интерфейс IMeal
export abstract class Meal implements IMeal {
  readonly name: string;
  protected basePrice: number;

  constructor(name: string, basePrice: number) {
    this.name = name;
    this.basePrice = basePrice;
    // Конструктор принимает на вход имя блюда и его базовую цену (из рецепта)
  }
  abstract calculatePrice(): number;
  // Необходим абстрактный метод calculatePrice, который будет реализован в наследниках

  getPrice(): number {
    return this.basePrice;
    //возвращает текущую цену на блюдо (базовая + стоимость дополнений (топпингов))
  }
}
