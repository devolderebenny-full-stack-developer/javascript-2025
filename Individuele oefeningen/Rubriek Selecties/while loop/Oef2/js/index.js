let i = 1;
let som = 0;
let deelGetal = 0;
let getallen = parseInt(window.prompt("hoeveel getallen wil je ingeven"));
while (i <= getallen){
    let bereken = parseInt(window.prompt(`geef getal ${i} in:`));
    som = som + bereken ;
    console.log(som);
    deelGetal++;
    i++;
}
console.log(`De totale som is ${som}`);
console.log(`Het gemiddelde van de som is  ${som / deelGetal}`);
