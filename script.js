/**
 * @author: LASME Ayou Emeline
 * @description:
 */

const numbers = [5,0,9,1,7,4,2,6,3,8];
// À l'aide de la .toString()méthode, convertissez le tableau en chaîne.
let chaine1 = numbers.toString();
console.log(chaine1);
// À l'aide de la .join()méthode, convertissez le tableau en chaîne. Essayez de transmettre différentes valeurs dans la jointure.
let chaine2 = numbers.join("+");
console.log(chaine2)

let chaine3 = numbers.join(" ");
console.log(chaine3)

let chaine4 = numbers.join("");
console.log(chaine4)

// Triez le numberstableau dans l'ordre décroissant, faites-le en utilisant des boucles for
// const numbers = [5,0,9,1,7,4,2,6,3,8];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    for (let j = i; j < numbers.length; j++) {
        if (j > i) {
            const element1 = numbers[j]
            element = element1
        }
    }    
}
console.log(numbers)
