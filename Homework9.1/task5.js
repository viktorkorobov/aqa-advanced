const users = [
    { name: "Анна", email: "anna@example.com", age: 25 },
    { name: "Максим", email: "maksim@example.com", age: 30 },
    { name: "Катерина", email: "katerina@example.com", age: 22 }
];

for (const user of users) {
    const { name, email, age } = user;
    console.log(`Ім'я: ${name}, Електронна пошта: ${email}, Вік: ${age}`);
}