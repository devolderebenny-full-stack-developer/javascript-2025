let limiet = parseInt(prompt("geef een limiet in:"));
let komma = " "
for(let i = 1 ; i <= limiet ; i = i*2) {
    komma += i + ", ";
}

console.log(komma);