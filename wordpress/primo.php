<?php
/*
Plugin Name: PLUGIN01
Description: Il mio primo plugin per wordpress!
Author: Me
Version: 1.0.0
*/


// quando l'utente guarda la pagina
function plugin01_widget(){
    // fai quello che devi fare
    $base = isset($_POST["base"]) ? intval($_POST["base"]) : "";
    $rep = isset($_POST["rep"]) ? intval($_POST["rep"]) : "";
    ?>
        <p>Per poter vedere le tue tabelline, compila il form qui sotto!</p>
        <form method="POST">
            <div>
                <input type="number" name="base" value="<?php echo($base);?>" placeholder="tabellina del..." class="input-text-wrap" />
            </div>
            <div>
                <input type="number" name="rep" value="<?php echo($rep);?>" placeholder="ripetizioni..." class="input-text-wrap" />
            </div>
            <button class="button button-primary">calcola!</button>
        </form>
    <?php
    if(isset($_POST["base"]) && isset($_POST["rep"])){
        echo("<ul>");
        for($i=1; $i < intval($_POST["rep"]); $i++){
            $valore = intval($_POST["base"]) * $i;
            echo("<li>{$_POST['base']} X {$i} = {$valore}</li>");
        }
        echo("</ul>");
    }
}

// qundo vieni chiamato
function plugin01_attivatore(){
    // fai presente che esiste il widget
    wp_add_dashboard_widget("plugin01_dashboard", "Tabelline", "plugin01_widget");
}

// quando wordpress esiste e sta facendo il setting della dashboard
// richiama l'attivatore
add_action("wp_dashboard_setup", "plugin01_attivatore");