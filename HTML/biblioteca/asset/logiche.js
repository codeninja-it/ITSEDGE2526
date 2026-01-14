// disegna la lista dei libri contenuti
function DisegnaTabella(categoria, target){
	let lavagna = document.getElementById(target);
	lavagna.innerHTML = "";
	for(let i=0; i < categoria.Elementi.length; i++){
		CreaCard(lavagna, categoria.Elementi[i]);
	}
}

function CreaCard(lavagna, libro){
	let container = document.createElement("div");
	container.classList.add("col-md-3");
	let card = document.createElement("div");
	card.classList.add("card");
	card.classList.add("shadow");
		let header = document.createElement("div");
		header.classList.add("card-header");
		header.innerText = libro.Titolo;
		card.appendChild(header);
		let body = document.createElement("div");
		body.classList.add("card-body");
		body.innerHTML = DisegnaCampi(libro);
		card.appendChild(body);
	container.appendChild(card);
	lavagna.appendChild(container);
}

function DisegnaCampi(libro){
	let campi = Object.keys(libro);
	righe = "";
	for(let i=0; i < campi.length; i++){
		let campo = campi[i];
		if(libro[campo] != undefined)
			righe += "<li><b>" + campo + "</b> : " + libro[campo] + "</li>";
	}
	return "<ul>" + righe + "</ul>";
}