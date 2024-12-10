const person = {
    firstName: "Олена",
    lastName: "Смирнова",
    age: 28
};

person.email = "olena.smirnova@example.com";

delete person.age;

console.log(person);