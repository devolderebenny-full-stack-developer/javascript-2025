const eindGetal = parseInt(prompt("geef het eindgetal in:"))
let i = 1;
let reeks = "";
let derde = 3;
let tiende = 10;
while (i<=eindGetal){
    switch (true){
        case (i%tiende === 0):
            reeks = reeks + " "+ ",";
            tiende = tiende + 10;
            i++
            break;

        case (i===derde) :
            reeks = reeks + i + "," + i + ",";
            derde= derde +3;
            i++
            break;

        default:
            reeks = reeks + i + ",";
            i++
    }
}
document.querySelector("#resultaat").innerHTML = reeks;