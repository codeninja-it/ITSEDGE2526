
// una riga qualunque...
class Riga {
	
	constructor(celle = []){
		this.celle = celle;
	}
	
	//
	// let riga = new Riga(["1", "Jhon", "Doe", "0575123456"]);
	// riga.where( campi => { return campi[1] == "Jhon"; } );
	// riga.where( riga => { return riga[1] == "Filippo"; } );
	// riga.where( r => { return r[3] == "0575123456"; } );
	//
	where(confronto){
		return confronto(this.celle);
	}
	
	//
	// let selezionata = riga.find( r => { return r[1] == "Jhon"; });
	//
	find(confronto){
		if( confronto(this.celle) )
			return this;
		return undefined;
	}
	
}