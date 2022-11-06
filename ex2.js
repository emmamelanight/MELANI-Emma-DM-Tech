// largest = trouver la plus grande valeur du tableau
// tableau en parametre
function largest(tableau) {
	console.log('tableau', tableau);
	let max = tableau[0]; // Initialisation de ton max qui est le premier element du tableau
	console.log('max = ', max);
	for (let i = 0; i < tableau.length; i++) { // Parcourir ton tableau
		console.log('i = ', i, ' tableau['+i+'] = ', tableau[i]);
		if (tableau[i] >= max) {  // Si la ieme valeur de ton tableau est supérieur max
			max = tableau[i]; // Alors tu affectes cette nouvelle valeur
			console.log('(new) max = ', max);
		}
	}
	// Résultat de ton max
	return max;
}

const monTableau = [1,6,3,10,2];
console.log('largest => ', largest(monTableau));