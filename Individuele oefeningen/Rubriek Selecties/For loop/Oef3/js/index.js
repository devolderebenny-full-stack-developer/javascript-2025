let ster = "*";
let aantal = parseInt(window.prompt("geef het aantal in:"));
let omgekeerd = aantal ;
for (let i = 1; i <= aantal; i++) {
    console.log(ster)
    ster = ster + "*";
}
for(let i = omgekeerd  ; i>=0 ; i--){
    let terug =omgekeerd;
    ster = ster.slice(1,omgekeerd +1);
    console.log(ster);
    omgekeerd--;
}