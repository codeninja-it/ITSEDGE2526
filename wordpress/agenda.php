<?php
/*
Plugin Name: AGENDA01
Description: Plugin che consente di creare un'agenda di contatti online.
Author: Me
Version: 1.0.0
*/

function agenda01_salvataggio_contatto($idpost){
    update_post_meta($idpost, "nome", $_POST["nome"]);
    update_post_meta($idpost, "cognome", $_POST["cognome"]);
    update_post_meta($idpost, "email", $_POST["email"]);
    update_post_meta($idpost, "telefono", $_POST["telefono"]);
}

// quando l'utente salverà il nostro contatto
add_action("save_post_agenda_contatto", "agenda01_salvataggio_contatto");

// quando verrà aperto un contatto
function agenda01_anagrafica(){
    // stampo all'utente la relativa interfaccia
    $id = get_the_id();
    $nome = get_post_meta($id, "nome", true);
    $cognome = get_post_meta($id, "cognome", true);
    $telefono = get_post_meta($id, "telefono", true);
    $email = get_post_meta($id, "email", true);
    ?>
        <p>
            <label for='nome'>Nome</label>
            <input id='nome' name='nome' value="<?php echo($nome); ?>" />
        </p>
        <p>
            <label for='cognome'>Cognome</label>
            <input id='cognome' name='cognome' value="<?php echo($cognome); ?>" />
        </p>
        <p>
            <label for='telefono'>Telefono</label>
            <input id='telefono' name='telefono' value="<?php echo($telefono); ?>" />
        </p>
        <p>
            <label for='email'>Email</label>
            <input id='email' name='email' value="<?php echo($email); ?>" />
        </p>
    <?php
}

function agenda01_riquadri(){
    add_meta_box(
        "contatto_informazioni", // id del box
        "Anagrafica del contatto", // titolo sopra il box
        "agenda01_anagrafica", // funzione che mi permetterà di gestirne il contenuto
        "agenda_contatto" // tipologia di post dove verrà mostrato
    );
}

add_action("add_meta_boxes", "agenda01_riquadri");

// quando il codice si avvia
function agenda01_init(){
    // definisco gli attributi del mio nuovo
    // tipo di post (contatti)
    $opzioni = array(
        "label"         =>  "Contatto",
        "labels"        => array(
                            "name"          => "Contatti",
                            "singular_name" => "Contatto",
                            "menu_name"     => "Contatti",
                            "add_new"       => "Aggiungi nuovo",
                            "add_new_item"  => "Aggiungi nuovo contatto"
                        ),
        "taxonomies"    => array("category"),
        "supports"      =>  array("title", "revisions", "excerpt", "thumbnail"),
        "menu_icon"     =>  "dashicons-id",
        "show_ui"       => true
    );
    // ed avverto il sistema della sua esistenza
    register_post_type("agenda_contatto", $opzioni);
}

// quando il sistema si inizializza, attivo il mio codice
add_action("init", "agenda01_init");