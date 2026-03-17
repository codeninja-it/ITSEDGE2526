<h2 class="text-success">Tipi di contatto</h2>

<?php

	if(isset($_GET["act"]) && $_GET["act"] == "new"){
		// se l'utente mi ha inviato dei dati
		if(isset($_POST["tipo"])){
			// sano il contenuto del campo
			$tipo = addslashes($_POST["tipo"]);
			// e lo uso per creare la mia query
			EseguiSQL("INSERT INTO tipi (tipo) VALUES ('{$tipo}');");
			echo "
			<div class='alert alert-success'>
				Elemento inserito, <a href='?plugin=tipi'>clicca qui</a> per tornare indietro!
			</div>";
		}
		// mostro il form di inserimento
		echo( // stampo
			Form( // una struttura form con dentro
				Campo("Tipologia contatto", "tipo") // il campo tipo 
			)
		);
	} else {
		// se nessuno mi dice nulla, gli faccio vedere
		// la lista dei tipi che conosco (quelli in DB)
		// se l'utente chiede la cancellazione di un record
		if(isset($_GET["act"]) && $_GET["act"] == "del"){
			// lo elimino
			Elimina("tipi", "idtipo", intval($_GET["id"]));
			// avverto di aver fatto
			echo("<div class='alert alert-danger'>Elemento eliminato</div>");
		}
		// e stampo la tabella
		echo( // con un pulsante di call-to-action
			"
			<div class='text-end'>
				<a class='btn btn-success' href='?plugin=tipi&act=new'>+</a>
			</div>" .
			Tabella("SELECT idtipo, tipo FROM tipi", "tipi", "idtipo") // e la tabella
		);
	}