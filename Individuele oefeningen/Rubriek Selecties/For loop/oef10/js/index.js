//schrijf een programma dat de tafels van vermeningvuldiging afdrukt
//vraag aan de gebruiker welke tafel je wil zien
//vraag aan de gebruiker het eindgetal
const tafel = parseInt(prompt("geef een tafel in die je wil zien "));
const einde = parseInt(prompt("tot hoever wil je de tafel zien "));
let uitkomst;
let reeks1 = "";
let reeks2 = "";
let reeks3 = "";
let reeks4 = "";
let som =0;
for (let i = 1;i<=einde;i++){
    som = tafel * i;
    uitkomst = tafel + "x" + i + "=" + som;
    if ( i <=3){
        reeks1 = reeks1 + uitkomst +",";
    }else if (i >3 && i<=6){
        reeks2 = reeks2 + uitkomst +",";
    }else if (i>4 && i<=9){
        reeks3 = reeks3 + uitkomst +",";
    }else if (i>9 && i<=12){
        reeks4 = reeks4 + uitkomst +",";
    }
}
reeks1= reeks1.slice(0, -1);
reeks2= reeks2.slice(0, -1);
reeks3= reeks3.slice(0, -1);
reeks4= reeks4.slice(0, -1);
document.querySelector("#eerste").innerHTML = reeks1;
document.querySelector("#tweede").innerHTML = reeks2;
document.querySelector("#derde").innerHTML = reeks3;
document.querySelector("#vierde").innerHTML = reeks4;