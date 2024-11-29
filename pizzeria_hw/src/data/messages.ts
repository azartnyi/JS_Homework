// тут мы храним сообщения об ошибках, например если не нашли пиццу по названию в заказе или заказ в пиццерии
// использовать сообщения отсюда для обработки ошибок при поиске
export enum ERROR_MESSAGES {
    PIZZA_NOT_FOUND = 'Pizza not found',
    ORDER_NOT_FOUND = 'Order not found',
}
