function isEven(getal) {
    if (getal % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(4)); // voorbeeld met prompt()
// integreren
let input = prompt("Geef een getal in:");
console.log(isEven(input));