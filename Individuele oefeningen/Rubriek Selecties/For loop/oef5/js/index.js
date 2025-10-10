//geef alle potentieele mogelijk combinaties geeft in 2 decimale vorm 00,01,02
let resultaat = "";
for(let i = 0; i<=99;i++){
    if (i<10){
        resultaat = resultaat +"0" + i + ",";
    }else if (i===99){
        resultaat = resultaat + i;
    }else {
        resultaat=resultaat + i +","
    }
}
console.log(resultaat);