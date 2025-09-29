let i = 1;
let som = 0;
let deelGetal = 0;
let getallen = parseInt(window.prompt("geef een getal in"));
while (i <= getallen){
    if (getallen > 0){
        som = som + getallen ;
        console.log(som);
        deelGetal++;
        i++
        getallen = parseInt(window.prompt(`geef getal in:`));
    }
}
console.log(`De totale som is ${som}`);
console.log(`Het gemiddelde van de som is  ${som / deelGetal}`);