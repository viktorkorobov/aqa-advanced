
class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get title() {
        return this._title;
    }


    set title(value) {
        if (typeof value !== 'string' || value.trim() === "") {
            throw new Error("Назва книги має бути непустим рядком!");
        }
        this._title = value;
    }


    get author() {
        return this._author;
    }


    set author(value) {
        if (typeof value !== 'string' || value.trim() === "") {
            throw new Error("Ім'я автора має бути непустим рядком!");
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error("Рік видання має бути додатнім числом!");
        }
        this._year = value;
    }

    printInfo() {
        console.log(`Книга: "${this.title}", Автор: ${this.author}, Рік видання: ${this.year}`);
    }

    static findOldestBook(books) {
        if (!Array.isArray(books)) {
            throw new Error("Аргумент має бути масивом!");
        }
        return books.reduce((oldest, book) => book.year < oldest.year ? book : oldest);
    }
}

module.exports = Book;