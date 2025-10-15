let beginGetal = parseInt(prompt("geef begin getal in:"));
let eindGetal = parseInt(prompt("geef eindgetal in:"));
let uitkomst = beginGetal;
for (let i =beginGetal+1; i<=eindGetal; i++){
    uitkomst= uitkomst*i ;

}
console.log(uitkomst);