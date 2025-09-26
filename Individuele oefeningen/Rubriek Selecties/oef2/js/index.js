let leeftijd = parseInt(window.prompt("Geef je leeftijd"));
if (leeftijd === 18){
    let bulletin = parseInt(window.prompt("Wil je een volle bulletin kopen 1: ja 2 :nee"));
    if(bulletin === 2){
        let aantalVakjes = parseInt(window.prompt("hoeveel vakjes wil: 10, 8, 6, 4, 2."))
    }else{
        alert("Dat is dan 20 euro mvg.")
    }
}else{
    alert("Je bent te jong om te spelen!")
}