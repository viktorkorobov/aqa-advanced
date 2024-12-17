function printTextWithDelay(text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay);
}

// Виклик функції
printTextWithDelay("Привіт, світ!", 2000); // Тефкст буде виведено через 2 секунд