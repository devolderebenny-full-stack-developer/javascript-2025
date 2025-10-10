//schrijf een programma dat de tafels van vermeningvuldiging afdrukt
//vraag aan de gebruiker welke tafel je wil zien
//vraag aan de gebruiker het eindgetal
const tafel = parseInt(prompt("geef een tafel in die je wil zien "));
const einde = parseInt(prompt("tot hoever wil je de tafel zien "));
let uitkomst;
let reeks = "";
let tafels
for (let i = 1;i<=einde;i++){
    let som = tafel * i;
    uitkomst = tafel + "x" + i + "=" + som;
    console.log(uitkomst);
    reeks = reeks + uitkomst +",";
}
document.querySelector("#resultaat").innerHTML = reeks;