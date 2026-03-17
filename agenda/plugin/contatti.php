<h2 class="text-success"></h2>

<?php
	echo( 
		Form(
			Campo("nome del contatto", "nome").
			Tendina("tipologia di contatto", "idtipo")
		)
	);

?>