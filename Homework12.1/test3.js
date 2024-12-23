async function fetchTodo() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos/1'
        )
        return await response.json()
    } catch (error) {
        console.error('Помилка завантаження todo:', error)
    }
}

async function fetchUser() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users/1'
        )
        return await response.json()
    } catch (error) {
        console.error('Помилка завантаження user:', error)
    }
}

;(async () => {
    try {
        const [todo, user] = await Promise.all([fetchTodo(), fetchUser()])
        console.log('Результат Promise.all:')
        console.log('Todo:', todo)
        console.log('User:', user)
    } catch (error) {
        console.error('Помилка Promise.all:', error)
    }
})()
;(async () => {
    try {
        const result = await Promise.race([fetchTodo(), fetchUser()])
        console.log('Результат Promise.race:', result)
    } catch (error) {
        console.error('Помилка Promise.race:', error)
    }
})()
