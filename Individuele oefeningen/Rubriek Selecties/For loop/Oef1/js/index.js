let hoeveel = parseInt(window.prompt("Hoeveel getallen wil je in geven:"));
let som = 0;
for (let i = 1; i<= hoeveel; i++){
    let getal = parseInt(window.prompt("geef je getal:"));
    som = som + getal;

}
console.log(`Je som is ${som}`);