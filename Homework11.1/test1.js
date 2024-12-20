function printTextWithDelay(text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay);
}

printTextWithDelay("Привіт, світ!", 2000); 