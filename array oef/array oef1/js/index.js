let teller = 0; // via teller kan je ook het aantal getallen bijhouden
let getallen = [1, 5, 7, 6, 8]; //dit is een array van getallen
let som = 0;
//dit is om een array te doorlopen !
for (let getal of getallen ){
    //van de index van getallen moet je ook een variable maken zo kan je die doorlopen om op te tellen
    som = som + getallen[teller];
    teller++;
}
alert(`De totale som van ${teller} is getallen is ${som}`);