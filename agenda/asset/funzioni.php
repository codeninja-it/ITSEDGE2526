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
	
	function Elimina($tabella, $pk, $valore){
		$conn = ApriDB();
		EseguiSQL("DELETE FROM {$tabella} WHERE {$pk}={$valore} LIMIT 1;");
		return $conn->affected_rows == 1;
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
	
	function Tabella($sql, $plugin, $chiave){
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
			$intestazione .= "<th></th>";
			$intestazione .= "<th></th>";
			$intestazione .= "</tr>";
		}
		
		// creo il corpo
		$corpo = "";
		while($riga = $dati->fetch_assoc()){
			$corpo .="<tr>";
				foreach($riga as $cella){
					$corpo .= "<td>{$cella}</td>";
				}
				$pk = $riga[$chiave];
				$corpo .= "<td style='width: 1%'><a href='?plugin={$plugin}&act=mod&id={$pk}' class='btn btn-warning'>modifica</a></td>";
				$corpo .= "<td style='width: 1%'><a href='?plugin={$plugin}&act=del&id={$pk}' class='btn btn-danger'>cancella</a></td>";
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
	
	function Form($contenuto, $destinazione = ""){
		return "
			<form action='{$destinazione}' method='POST'>
				{$contenuto}
				<div class='text-end m-3'>
					<button type='submit' class='btn btn-success'>salva</button>
					<button type='reset' class='btn btn-secondary'>annulla</button>
				</div>
			</form>
		";
	}
	
	function Campo($descrizione, $id, $valore = "", $tipo = "text"){
		if ($tipo == "textarea"){
			return "
			<div>
				<label for='{$id}'>{$descrizione}</label>
				<textare id='{$id}' name='{$id}'
					class='form-control'>{$valore}</textare>
			</div>
			";
		}
		return "
		<div>
			<label for='{$id}'>{$descrizione}</label>
			<input id='{$id}' name='{$id}'
				type='{$tipo}' value='{$valore}' class='form-control' />
		</div>
		";
	}
	
	function Tendina($label, $tabella, $pk, $descrittore, $valore = 0){
		$dati = EseguiSQL("SELECT {$pk}, {$descrittore} 
							FROM {$tabella}
							ORDER BY {$descrittore};");
		$buffer = "<option value=0>{$descrittore}...</option>";
		while($riga = $dati->fetch_assoc()){
			if($riga[$pk] == $valore){
				$buffer .= "<option selected value={$riga[$pk]}>{$riga['tipo']}</option>";
			} else {
				$buffer .= "<option value={$riga[$pk]}>{$riga['tipo']}</option>";
			}
		}
		return "
		<div>
			<label for='{$pk}'>{$label}</label>
			<select id='{$pk}' name='{$pk}' class='form-select'>
				{$buffer}
			</select>
		</div>
		";
	}