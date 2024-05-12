// Returnează numărul de vocale dintr-un șir de caractere (string)
// "aeiou"


function numarVocale(sir) {
    const vocale = 'aeiouAEIOU';
    let numarVocale = 0;

    for (let caracter of sir) {
        if (vocale.includes(caracter)) {
            numarVocale++;
        }
    }

    return numarVocale;
}

const sir = "string de test";
console.log(numarVocale(sir));

