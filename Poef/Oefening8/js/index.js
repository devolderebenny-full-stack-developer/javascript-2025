let leeftijd = parseFloat(window.prompt("Geef je leeftijd in:"));

if (leeftijd >= 18){
    alert("Je bent volwassen.");
}else if (leeftijd < 12){
    alert("Je bent een kind.");
}else{
    alert("Je bent een tiener.")
}