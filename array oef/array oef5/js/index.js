/*Oefening 5: Zoeken in een array
Schrijf een programma dat controleert of een bepaald getal aanwezig is in een array
en "Gevonden!" afdrukt als het aanwezig is, anders "Niet gevonden".*/
let elementen = [2, 5, 6, 8, 3];// hier maak je een array aan
var getal = parseInt(window.prompt("Geef een getal tussen 1 en 10:"))//hier vraag je een getal aan de gebruiker

let teller = 0;//hier maak je een teller aan zodat je kan bijhouden hoeveel keer het getal is gevonden
//hier een je for of loop van om je elementen te doorlopen
for (let element of elementen)
    //hier onder maak je een is statement die kijkt of element gelijk is aan getal met == die controleert met niet op data type
     if (element == getal){
          alert(`je getal ${getal} zit in de array`);
          //hier doe je teller ++ om de teller te laten bij tellen iedere keer hij hier door loopt
          teller++;
    }
}
// deze if kijkt of teller === 0 zoja geef je deze alert

if(teller === 0) {
    alert(`je getal ${getal} zit niet in de array`);
}