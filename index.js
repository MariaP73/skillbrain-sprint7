// Calculați suma numerelor dintr-un șir de numere
// "1, -5, 20, -34, 16, 29, 36, -4"

function calculeazaSuma(numere) {
    let suma = 0;
    for (let i = 0; i < numere.length; i++) {
        suma += numere[i];
    }
    return suma;
}


const numere = [1, -5, 20, -34, 16, 29, 36, -4];
console.log(calculeazaSuma(numere));


