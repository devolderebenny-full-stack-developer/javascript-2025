let tekst = prompt("geef een tekst in:");
let karakter = prompt("geef een karakter in die je wil tellen:");
teller = 0;
for (let i = 0; i<= tekst.length; i++){
    if (tekst[i] === karakter){
        teller++;
    }
}
console.log(teller);
