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
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      // compare les éléments adjacents
        if (numbers[j] < numbers[j + 1]) {
            // échange les valeurs en utilisant une variable temporaire
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log(numbers);
