//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav")
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opcion
let links = document.querySelectorAll("nav a")
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none"
        menu_visible = false;
    }
}

//Creo las barritas de una particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=8;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div)
    }
}

//selecciono todas las barras genereales para luego manipularlas
let balances = document.getElementById("balances")
crearBarra(balances)
let auditoria = document.getElementById("auditoria")
crearBarra(auditoria)
let laboral = document.getElementById("laboral")
crearBarra(laboral)
let impuestos = document.getElementById("impuestos")
crearBarra(impuestos)

