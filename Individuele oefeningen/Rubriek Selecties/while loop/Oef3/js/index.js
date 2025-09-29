let som = 0;
let i = 1;
let vraag = parseInt(window.prompt("geef een getal in waar je het faculteit wil van weten:"));
while (i<=vraag){
    let teller = vraag - 1 ;
    som = vraag * teller ;
    console.log(teller);
    console.log(som);
    i++;

}
