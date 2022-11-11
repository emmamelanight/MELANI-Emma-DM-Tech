// Fonction pour calculer la somme avec la valeur en parametre
function somme(valeur) {
	// Intialiser le total
	let total = 0;
	// On parcours 
	for (let i = 0; i <= valeur; i++) {
		console.log('total = ', total, 'i = ',i);
		total += i; // <=> total = total + i;
	}
	return total;
}

function programme() {
	let valeur = prompt('Saisir une valeur'); // Saisie de la valeur
	valeur = parseInt(valeur); // On convertit la valeur en nombre entier avec la fonction parseInt()
	if (isNaN(valeur)) { // Si la valeur saisit n'est pas un nombre entier
		alert('Ressayer');
		programme(); // Relance du programme tant que c'est pas un nombre entier
	}
	else {
		alert('Le resultat est ' + somme(valeur)); // Affichage du resultat avec alert()
	}
}

// Execution du programme
programme();