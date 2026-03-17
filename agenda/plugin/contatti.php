<h2 class="text-success">Contatti</h2>

<?php
	if(isset($_GET["act"]) && $_GET["act"] == "new"){
		if(isset($_POST["nome"])){
			$nome = addslashes($_POST["nome"]);
			$cognome = addslashes($_POST["cognome"]);
			$email = addslashes($_POST["email"]);
			$idtipo = intval($_POST["idtipo"]);

			EseguiSQL("INSERT INTO contatti (nome, cognome, email, idtipo) 
						VALUES ('{$nome}', '{$cognome}', '{$email}', {$idtipo});");
			echo "
			<div class='alert alert-success'>
				Elemento inserito, <a href='?plugin=contatti'>clicca qui</a> per tornare indietro!
			</div>";
		}

		echo(
			Form(
				Campo("Nome", "nome").
				Campo("cognome", "cognome").
				Campo("Posta elettronica", "email").
				Tendina("Tipo di contatto", "tipi", "idtipo", "tipo")
			)
		);
	} else if(isset($_GET["act"]) && $_GET["act"] == "mod"){
		$id = intval($_GET["id"]);
		if(isset($_POST["nome"])){
			$nome = addslashes($_POST["nome"]);
			$cognome = addslashes($_POST["cognome"]);
			$email = addslashes($_POST["email"]);
			$idtipo = intval($_POST["idtipo"]);
			EseguiSQL("UPDATE contatti
						SET nome='{$nome}', cognome='{$cognome}',
						email='{$email}', idtipo={$idtipo}
						WHERE idutente={$id}
						LIMIT 1;");
			echo("<div class='alert alert-success'>Modifica avvenuta!</div>");
		}

		$dati = EseguiSQL("SELECT nome, cognome, email, idtipo FROM contatti WHERE idutente={$id} LIMIT 1;");
		$riga = $dati->fetch_assoc();
		echo(
			Form(
				Campo("Nome", "nome", $riga["nome"]).
				Campo("cognome", "cognome", $riga["cognome"]).
				Campo("Posta elettronica", "email", $riga["email"]).
				Tendina("Tipo di contatto", "tipi", "idtipo", "tipo", $riga["idtipo"])
			)
		);
		
	} else {
		if(isset($_GET["act"]) && $_GET["act"] == "del"){
			Elimina("contatti", "idutente", intval($_GET["id"]));
			echo("<div class='alert alert-danger'>Elemento eliminato</div>");
		}
		echo(
			"
			<div class='text-end'>
				<a class='btn btn-success' href='?plugin=contatti&act=new'>+</a>
			</div>" .
			Tabella("SELECT idutente, nome, cognome, email, tipo
						FROM contatti
						LEFT JOIN tipi ON contatti.idtipo=tipi.idtipo"
					, "contatti", "idutente") // e la tabella
		);
	}