let limiet = parseInt(prompt("geef een limiet in:"));
let som = 1
let som2 =1
for(let i = 3 ; i<= limiet; i++){
   if (som <= limiet){
       console.log(som);
       let volgende = som + som2;
       som = som2;
       som = volgende;
   }
}