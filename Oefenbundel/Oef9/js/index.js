//als je de uitkomst van iedere cijfer naast elkaar wil krijgen met een string bv: * of ,
var resultaat = "";
for (let i = 1; i<=30; i++){
    if (i%3 === 0){
       if (i === 30){
           resultaat = resultaat + i;
       }else{
           resultaat = resultaat + i +",";
       }
    }
}
console.log(resultaat);