// definizione della ricetta di un libro qualunque
class Libro {
	
	constructor(titolo, autore, anno, prezzo, inPrestito){
		this.Titolo = titolo;
		this.Autore = autore;
		this.Anno = anno;
		this.Prezzo = prezzo;
		this.InPrestito = inPrestito;
	}
	
	Render(target){
		//let cella = document.createElement("div");
		//cella.classList.add("col-md-3");
		
		let libro = document.createElement("libro");
		libro.innerHTML = "<titolo>" + this.Titolo + "</titolo>";
		libro.innerHTML += "<attributo quale='Autore'>" + this.Autore + "</attributo>";
		libro.innerHTML += "<attributo quale='Anno'>" + this.Anno + "</attributo>";
		libro.innerHTML += "<attributo quale='Prezzo'>" + this.Prezzo + "</attributo>";
		libro.innerHTML += "<attributo quale='InPrestito'>" + (this.inPrestito ? "si" : "no") + "</attributo>";
		target.appendChild(libro);
		
		// let card = document.createElement("div");
		// card.classList.add("card");
		// card.classList.add("shadow");
		
		// let header = document.createElement("div");
		// header.classList.add("card-header");
		// header.innerHTML = this.Titolo;
		// card.appendChild(header);
		
		// let body = document.createElement("div");
		// body.classList.add("card-body");
		// body.innerHTML = "<b>Autore: </b>" + this.Autore + "<br>";
		// body.innerHTML += "<b>Anno: </b>" + this.Anno + "<br>";
		// body.innerHTML += "<b>Prezzo: </b>" + this.Prezzo + "<br>";
		// body.innerHTML += "<b>In prestito: </b>" + (this.inPrestito ? "si" : "no") + "<br>";
		// card.appendChild(body);
		
		// cella.appendChild(card);		
		//target.appendChild(cella);
	}
	
}

class Autore {
	constructor(nome, cognome){
		this.Nome = nome;
		this.Cognome = cognome;
	}
}

class Biblioteca {
	
	constructor(nome){
		this.Nome = nome;
		this.Categorie = [];
	}
	
}



var libro1 = new Libro("Il Trono di Spade", "J.R.R. Martin");
var libro2 = new Libro("La Spada si Shannara");
var libro3 = new Libro("Antifragile");
var libro4 = new Libro("In tavola con Gordon Ramsay");

// definisco come devono essere le mie categorie
class Categoria {
	
	constructor(nome, elementi){
		this.Nome = nome;
		this.Elementi = elementi;
	}
	
	Render(target){
		// devo trovare dove eseguire il mio rendering
		let lavagna = document.getElementById(target);
		lavagna.innerHTML = "";
		// per ogni elemento che contengo
		for(let i=0; i < this.Elementi.length; i++){
			// gli chiedo di stamparsi a schermo
			this.Elementi[i].Render(lavagna);
		}
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
	new Libro("La scienza in cucina"),
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