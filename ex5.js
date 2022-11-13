function tri(tableau) {
	console.log('tableau = ', tableau);
	return tableau.sort((a,b) => a-b); // La fonction sort() permet de faire un tri
}

const monTableau = [7,3,1,8,12,2,5];
console.log(tri(monTableau))


// Il existe plusieurs algorithmes de tri : tri par insertion, tri par selection