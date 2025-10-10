const getal = parseInt(prompt("geef een getal in:"));
const getal2 = parseInt(prompt("geef getal 2 in:"));
grootsteGemeneDeler = 0;
if (getal<getal2){
    for (let i = 1;i<=getal;i++){
        if (getal%i ===0 && getal2%i===0){
            grootsteGemeneDeler = i;
        }
    }
}else{
    for (let i = 1;i<=getal2;i++){
        if (getal2%i ===0 && getal%i===0){
            grootsteGemeneDeler = i;
        }
    }
}
console.log(grootsteGemeneDeler);
