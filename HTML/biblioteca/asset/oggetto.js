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
			// estraggo i campi che mi ha passato l'utente
			let campi = Object.keys(daTrovare);
			// per ognuno di loro
			for(let n=0; n < campi.length; n++){
				// ne prendo il nome
				let campo = campi[n];
				// se è valorizzato e uguale a quello dell'elemento in analisi
				if(daTrovare[campo] != undefined && daTrovare[campo] == elemento[campo]){
					// ho trovato quello che cercavo!
					return elemento;
				}
			}
		}
		// se dopo aver guardato tutti i libri non ho ancora
		// restituito nulla
		// avverto l'utente che non c'è
		return undefined;
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