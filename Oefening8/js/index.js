let getal = parseInt(window.prompt("raad het getal tussen 1 en 10 :"));
var teRadenGetal = 6;
let teller = 0 ;
while (getal !== teRadenGetal){
    getal = parseInt(window.prompt(" niet juist geef je getal opnieuw"));
    teller++;
}
alert("je bent gewonnen ");
console.log(`Je hebt ${teller} geraden`);