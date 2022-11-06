//création de la fonction
function reverse(texte) {
	let splitTexte = texte.split(''); // Converti texte en tableau
	console.log('splitTexte = ', splitTexte);
	let reverseTableau = splitTexte.reverse();
	console.log('reverseTableau = ', reverseTableau);
	let newTexte = reverseTableau.join(''); // Join est l'inverse de split
	return newTexte;
}

console.log('reverse', reverse('Bonjour toto'));