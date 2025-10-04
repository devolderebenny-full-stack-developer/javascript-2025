let getal = parseInt(prompt("geef een getal in:"));
for (let i = 2; i <= 100; i++){
    let priemGetal = true;
    for (let j = 2; j<i; j++){
        if (i%j === 0){
            priemGetal = false;
        }
    }
    if (priemGetal){
        console.log(i);
    }
}