let getallen = parseInt(prompt("geef in hoeveel getallen je wil in geven:"));
let som = 0;
let reeks = [];
let teller = 0;
for (let i = 1; i<= getallen; i++){
    let getal = parseInt(prompt(`geef je ${i} in:`));
    reeks.push(getal);
    som = som + getal;
}

console.log(som);
console.log(reeks);