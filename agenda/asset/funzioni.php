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
	
	