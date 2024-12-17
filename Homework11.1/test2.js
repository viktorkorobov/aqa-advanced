function fetchToDo() {
    return fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        .then((response) => {
            if (!response.ok){throw new Error(`Помилка при отриманні todo`)}
            return response.json();
        });
}

function fetchToUser(){
    return fetch(`https://jsonplaceholder.typicode.com/users/1`)
        .then((response) => {
            if (!response.ok){throw new Error(`Помилка при отриманні user`)}
            return response.json();
        });
}

Promise.all([fetchToDo(),fetchToUser()])
    .then((todo, user) => {
        console.log("Результат Promise.all:");
        console.log("todo:", todo);
        console.log("user:", user);
        }
    )
    .catch((error) => console.error("Помилка Promise.all:", error));

Promise.race([fetchTodo(), fetchUser()])
    .then((result) => {
        console.log("Результат Promise.race:", result);
    })
    .catch((error) => console.error("Помилка Promise.race:", error));