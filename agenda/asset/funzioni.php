<?php

	// aprire un DB
	function ApriDB(){
		$conn = new mysqli("127.0.0.1", "root", "", "itsphp");
		return $conn;
	}
	
	function EseguiSQL($sql){
		$conn = ApriDB();
		try {
			return $conn->query($sql);
		} catch (Exception $err) {
			file_put_contents("errori.log", $err, FILE_APPEND);
			return false;
		}
	}
	
	function Griglia($sql, $larghezza = 3, $intestazione = "nome"){
		// ottengo i dati
		$dati = EseguiSQL($sql);
		// costruisco le carte
		$carte = "";
		foreach($dati as $riga){
			// estraggo una riga per volta
			// calcolo il titolo
			$titolo = $riga[$intestazione];
			// e ne tratto le celle singolarmente
			$campi = "";
			foreach($riga as $nome => $valore){
				if($intestazione != $nome){
					$campi .= "<b>{$nome}:</b> {$valore}<br/>";
				}
			}
			// per poi creare la card singola
			$carte .= "
			<div class='col-md-{$larghezza}'>
				<div class='card h-100 shadow shadow-sm'>
					<div class='card-header'>{$titolo}</div>
					<div class='card-body'>
					{$campi}
					</div>
				</div>
			</div>
			";
		}
		
		// restituire il risultato
		return "
		<div class='row g-3'>
		{$carte}
		</div>
		";
	}
	
	function Tabella($sql){
		$dati = EseguiSQL($sql);
		if($dati == false || $dati->num_rows == 0)
			return "";
		// creo l'intestazione
		$intestazione = "";
		if($campi = $dati->fetch_fields()){
			$intestazione .= "<tr>";
			foreach($campi as $campo){
				$intestazione .= "<th>{$campo->name}</th>";
			}				
			$intestazione .= "</tr>";
		}
		
		// creo il corpo
		$corpo = "";
		while($riga = $dati->fetch_assoc()){
			$corpo .="<tr>";
				foreach($riga as $cella){
					$corpo .= "<td>{$cella}</td>";
				}			
			$corpo .= "</tr>";
		}

		// restituisco il mock-up
		return "
				<div class='table-responsive'>
					<table class='table table-hover'>
						<thead>
							{$intestazione}
						</thead>
						<tbody>
							{$corpo}
						</tbody>
					</table>
				</div>";
	}
	
	