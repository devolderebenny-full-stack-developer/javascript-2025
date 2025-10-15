let eindGetal= parseInt(prompt("geef een eindgetal in:"));
let som = 1;
let resultaat = "1";
 for(let i = 2; i<=eindGetal;i++){

     if (i%2 ===0){
         resultaat = resultaat + " + " + i;
         som =som + i;
     }
     if (i%2 === 1){
         resultaat = resultaat  + " - " + i;
         som = som -i;
     }
 }
console.log(resultaat = resultaat + " = " + som);
