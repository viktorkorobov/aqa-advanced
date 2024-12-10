const Book = require('./Book.js');

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year); // Виклик конструктора батьківського класу
        this._fileFormat = fileFormat;
    }

   
    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== 'string' || value.trim() === "") {
            throw new Error("Формат файлу має бути непустим рядком!");
        }
        this._fileFormat = value;
    }

    printInfo() {
        console.log(`Електронна книга: "${this.title}", Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.fileFormat}`);
    }

    static createFromBook(bookInstance, fileFormat) {
        if (!(bookInstance instanceof Book)) {
            throw new Error("Перший аргумент має бути екземпляром класу Book!");
        }
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
}

module.exports = EBook;