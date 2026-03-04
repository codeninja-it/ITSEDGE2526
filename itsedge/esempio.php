ciao!
<?php
	
	// per creare una variabile
	$a = "2";
	// uso il dollaro
	$b = 4;
	
	// e il punto per la concatenazione
	$a .= $b; // uguale a $a = $a . $b; ed è differente da $a += $b;
	
	/* operatori
		+ addizione, se semplificato +=
		- sottrazione, se semplificato -=
		/ divisione, oppure /=
		* moltiplicazione, oppure *=
		% modulo o resto della divisione
		++ incremento
		-- descremento
		&, && and logico
		|| or logico
		| bitmapping
	*/
	
	// per restituire un calcolo
	echo("il risultato è " . ($a + $b) );
	
?>