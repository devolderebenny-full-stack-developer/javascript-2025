const eindGetal = parseInt(prompt("geef het eindgetal in:"));
let teRadenGetal = Math.floor(Math.random() * eindGetal)+1;
let geradenGetal = parseInt(prompt("raad het getal:"));
let i =1;
while( geradenGetal !== teRadenGetal){
    if (geradenGetal<teRadenGetal){
        geradenGetal = parseInt(prompt("het getal is groter kies opnieuw:"));
        i++
    }else if (geradenGetal>teRadenGetal){
        geradenGetal = parseInt(prompt("het getal is kleiner kies opnieuw:"));
        i++
    }
}
document.querySelector("#resultaat").innerHTML = `Proficiat u hebt het getal in ${i} aantal keer geraden.`