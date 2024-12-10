const Book = require('./Book.js');
const EBook = require('./EBook.js');

const book1 = new Book("Майстер і Маргарита", "Михайло Булгаков", 1967);
const book2 = new Book("1984", "Джордж Орвелл", 1949);
const book3 = new Book("Фауст", "Йоганн Вольфганг фон Гете", 1808);

book1.printInfo();
book2.printInfo();
book3.printInfo();

const ebook1 = new EBook("Програмування на Python", "Гвідо ван Россум", 2019, "PDF");
ebook1.printInfo();

const booksArray = [book1, book2, book3, ebook1];
const oldestBook = Book.findOldestBook(booksArray);
console.log("Найдавніша книга:");
oldestBook.printInfo();

const ebook2 = EBook.createFromBook(book2, "EPUB");
ebook2.printInfo();