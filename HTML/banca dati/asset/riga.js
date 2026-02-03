
// una riga qualunque...
class Riga {
	
	constructor(intestazioni = [], dati = []){
		this.celle = {};
		for(let i=0; i < intestazioni.length; i++){
			let chiave = intestazioni[i];
			let valore = dati[i];
			this.celle[chiave] = valore;
		}
	}
	
	//
	// let riga = new Riga(
	//						["idcontatto", "nome", "cognome", "telefono"],
	//						["1", "Jhon", "Doe", "0575123456"]);
	// riga.where( r => r.nome == "Jhon" } );
	//
	where(confronto){
		return confronto(this.celle);
	}
	
	//
	// let selezionata = riga.find( r =>  r.nome == "Jhon" && r.cognome == "Doe" );
	//
	find(confronto){
		if( confronto(this.celle) )
			return this;
		return undefined;
	}
	
}