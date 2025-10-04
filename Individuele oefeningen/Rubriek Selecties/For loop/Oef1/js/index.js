let hoeveel = parseInt(window.prompt("Hoeveel getallen wil je in geven:"));
let som = 0;
let teller = 1;
for (let i = 1; i<= hoeveel; i++){
    let getal = parseInt(window.prompt(`geef je getal ${teller} in:`));
    som = som + getal;
    teller++

}
console.log(`Je som is ${som}`);