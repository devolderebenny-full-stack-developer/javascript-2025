// var leeftijd = window.prompt("Geef je leeftijd");
//
// if (leeftijd >= 18){ console.log(`U mag deelnemen je bent ${leeftijd} jaar.`)
//
// }else {
//     console.log(`U leeftijd is ${leeftijd} te jong om deel te nemen.`)
// }

// var geboorteJaar = window.prompt("geef je geboortejaar.")
// var huidigJaar = window.prompt("Wat is het huidig jaar?")
//
// var geboorteJaar = parseInt(geboorteJaar);
// var huidigJaar = parseInt(huidigJaar);
//
// var leeftijd = huidigJaar - geboorteJaar;
//
// if (leeftijd >= 18){
//     console.log(`U bent ${leeftijd} is oud genoeg.`);
// }else{
//     console.log(`U bent ${leeftijd} is te jong.`)
// // }
//
// console.log(leeftijd);

var getal1 = window.parseInt(prompt("Geef jaartal1"));
var getal2 = window.parseInt(prompt("Geef jaartal2"));
if (getal1 > getal2){
    var leeftijd = getal1 - getal2;

}else{
    var leeftijd = getal2 - getal1;
}

if (leeftijd >= 18){
console.log(`U bent ${leeftijd} is oud genoeg.`);
}else{
   console.log(`U bent ${leeftijd} is te jong.`);
 }

 console.log(leeftijd);
