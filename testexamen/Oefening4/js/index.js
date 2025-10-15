let zin = window.prompt("geef een zin in:");
karakters = 0;
woorden = 1;
for(letter of zin){
    if(letter !== " "){
        karakters++;
    }else if (letter === " "){
        woorden++
    }
}
console.log(karakters);
console.log(woorden);