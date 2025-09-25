let elementen = [5, 4, 6, 9 ,8]

let hoogste= 0;
for (let element of elementen){
    if (hoogste < element){
        hoogste = element;
    }
}
console.log(`het hoogste getal is ${hoogste}`);