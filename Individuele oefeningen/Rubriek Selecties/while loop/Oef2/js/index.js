const getallen = parseInt(prompt("geef in hoeveel getallen je wil ingeven:"));
let i =1;
let som=0;
while (i<=getallen){
    let getal = parseInt(prompt(`geef getal ${i} in:`));
    som += getal;
    i++;
}
document.querySelector("#som").innerHTML = `De totale som van ${getallen} is ${som}`;
document.querySelector("#gemiddelde").innerHTML = `Het gemiddelde van de ${getallen} getallen is ${som/getallen}`;