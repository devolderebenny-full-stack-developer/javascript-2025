//fibonacci reeks vraag de gebruiker hoeveel getallen er dienen te worden weergegeven
const hoeveel = parseInt(prompt("geef in hoeveel getallen je wil zien:"));
let getal = 0;
let getal2= 1;
let reeks = getal+","+getal2;
for (let i = 2;i<=hoeveel;i++) {
    let volgende = getal+getal2;
    reeks += ","+volgende;
    getal = getal2;
    getal2=volgende;

}
document.querySelector("#resultaat").innerHTML = reeks;