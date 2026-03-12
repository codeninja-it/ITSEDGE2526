<?php include("asset/head.php"); ?>
<?php include("asset/funzioni.php");?>

<h1 class="bg-success text-white p-3">Agenda</h1>

<div class="container">
	<div class="row">
		<div class="col-md-4 bg-secondary text-white">
			<?php include("asset/menu.php"); ?>
		</div>
		<div class="col-md-8">
			<?php
				
				if(isset($_GET["plugin"])){
					//carico il plugin
					include("plugin/{$_GET['plugin']}");
				} else {
					?>
						Benvenuto in agenda! il tuo nuovo sistema di gestione scadenze!
					<?php
					echo( Griglia(
							"SELECT concat(nome, ' ', cognome) as nomeCompleto, email
							FROM contatti;",
							4,
							"nomeCompleto"
						)
					);
				}
			?>			
		</div>
	</div>
	
</div>

<?php include("asset/foot.php"); ?>