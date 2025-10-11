const getal = parseInt(prompt("geef een getal in:"));
const getal2 = parseInt(prompt("geef getal 2 in:"));
let min = 0;
let max = 0;
let eindeTeller= getal* getal2;
if (getal< getal2){
    min= getal;
    max= getal2;
}else {
    min= getal2;
    max = getal;
}
