// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

async function createTodo(params) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

        if (response.status !== 201) {
            throw new Error('Failed to create todo. Error code: ' + response.status, { cause: response.statusText });
        }


        const responseData = await response.json();
        console.log('Response Data:', responseData);


        for (let key in params) {
            if (params[key] !== responseData[key]) {
                throw new Error(`Missing data for key: ${key}`);
            }
        }

        return responseData;
    } catch (error) {
        console.error(`Error: ${error.message}, reason: ${error.cause});
    } finally {
        console.log('Работа функции завершена');
    }
}

createTodo({
    title: 'New todo',
    userId: 1,
    completed: false
})
.then(data => console.log('Created todo:', data))
.catch(error => console.error('Error in createTodo:', error));

