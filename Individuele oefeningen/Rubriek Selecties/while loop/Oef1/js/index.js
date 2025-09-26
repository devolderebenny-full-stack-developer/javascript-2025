let getal = parseInt(window.prompt(" geef nog een getal in:"));
let som = 0;
while ( getal >= 0 ){
    som = som + getal;
    getal = parseInt(window.prompt(" geef nog een getal in:"));
}
console.log(som);