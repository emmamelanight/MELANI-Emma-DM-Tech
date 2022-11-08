function ex3() {
	console.log('ex3');
	let valeur = prompt('Combien ?');
	valeur = parseInt(valeur); // parseInt converti ta valeur en nombre entier
	console.log('valeur = ', valeur);

	// Verifier si la valeur est un chiffre (et pas des lettres)
	if (isNaN(valeur)) { // Si valeur saisie n'est pas un chiffre
		alert('Ressayer');
		ex3(); // Tu relances la fonction
	}
	else { // Si la valeur saisie est un chiffre
		let chaine = '';
		console.log('chaine = ', chaine);
		let depart = valeur + 1;
		console.log('depart = ', depart);
		let fin = valeur + 10;
		console.log('fin = ', fin);
		for (let i = depart; i <= fin; i++) {
			console.log('i = ', i);
			chaine += i + ' ; '; // + (i != fin ? ' ; ' : ''); // <=> chaine = chaine + i@
			// if (i != fin) {
			// 	chaine += ' ; ';
			// }
		} 
		alert(chaine);
	}
}

// Execution du programme
ex3();