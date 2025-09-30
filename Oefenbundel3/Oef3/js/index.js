//print getallen die een patroon volgen (1,2,4,8,....)
// let limiet = parseInt(prompt("geef een limiet in:"));
// for(let i = 1 ; i <= limiet ; i++){
//     console.log(i);
//     i= i*2-1;
//
// }
//hieronder is de beste en korste ooplossing
let limiet = parseInt(prompt("geef een limiet in:"));
for(let i = 1 ; i <= limiet ; i = i*2){
     console.log(i);
}