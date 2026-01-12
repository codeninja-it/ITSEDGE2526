// definizione della ricetta di un libro qualunque
class Libro {
	
	constructor(titolo, autore, anno, prezzo, inPrestito){
		this.Titolo = titolo;
		this.Autore = autore;
		this.Anno = anno;
		this.Prezzo = prezzo;
		this.InPrestito = inPrestito;
	}
	
}

var libro1 = new Libro("Il Trono di Spade");
var libro2 = new Libro("La Spada si Shannara");
var libro3 = new Libro("Antifragile");
var libro4 = new Libro("In tavola con Gordon Ramsay");

// definisco come devono essere le mie categorie
class Categoria {
	
	constructor(nome, elementi){
		this.Nome = nome;
		this.Elementi = elementi;
	}
	
	// e cosa devono fare
	// tipo aggiungere un nuovo libro
	Add(nuovoElemento){
		this.Elementi.push(nuovoElemento);
	}

	
	// trovare un libro
	Find(daTrovare){
		// per ogni libro in collezione
		for(let i=0; i < this.Elementi.length; i++){
			// dopo averne preso il riferimento in RAM
			let elemento = this.Elementi[i];
			// controllo se è uguale alla ricerca dell'utente
			if(this.Equals(elemento, daTrovare)){
				// e nel caso glielo restituisco
				return elemento;
			}
		}
		// se dopo aver guardato tutti i libri non ho ancora
		// restituito nulla
		// avverto l'utente che non c'è
		return undefined;
	}
	
	// controlla se i due oggetti sono uguali in tutti i loro parametri
	Equals(elemento, daTrovare){
		let campi = Object.keys(elemento);
		let buono = true;
		for(let n=0; n < campi.length && buono; n++){
			let campo = campi[n];
			if(daTrovare[campo] != undefined){
				if(daTrovare[campo] != elemento[campo])
					buono = false;
			}
		}
		return buono;
	}	
	
	// e toglierlo dalla collezione
	Remove(daTrovare){
		let daSalvare = [];
		for(let i=0; i < this.Elementi.length; i++){
			let elemento = this.Elementi[i];
			if(elemento != daTrovare)
				daSalvare.push(elemento);
		}
		this.Elementi = daSalvare;
	}
	
}

var cucina = new Categoria("Cucina", [
	new Libro("1000 ricette al microonde"),
	new Libro("L'arte di cucina"),
	new Libro("In tavola con Gordon Ramsay"),
	new Libro("Orrori da Gustare")
]);

var libri = [
	new Libro("1000 ricette al microonde"),
	new Libro("L'arte di cucina"),
	new Libro("In tavola con Gordon Ramsay"),
	new Libro("Orrori da Gustare")
];

var libri2 = libri;




var cucina = new Categoria("Cucina", libri);