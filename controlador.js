let misNotas;

window.onload = () => {
    //Empieza el programa
    misNotas = new ListaNotas();
    // Carga las notas del localStorage si existen
    if(localStorage.getItem("notas")){
        misNotas.lista = JSON.parse(localStorage.getItem("notas"));
    }

    vista = new VistaCompleja();

    //Definimos los eventos
    document.getElementById("buttonAltaNota").addEventListener("click", nuevaNota);

    vista.mostrarNotas(misNotas.lista, 'app');
}

function actualizarLocalStorage(){
    // Guarda todas las notas en el localStorage, no solo la última
    localStorage.setItem("notas", JSON.stringify(misNotas.lista));
}


function nuevaNota() {
    
    campoTitulo = document.getElementById("inputTitulo");
    campoTexto = document.getElementById("inputTexto");
    //Creao dato en el MODELO
    misNotas.añadirNota(campoTitulo.value, campoTexto.value);
    notaActual = misNotas.lista[misNotas.lista.length - 1];
    //Creo la vista
    vista.creaNota(notaActual, "app");
    borradoNota = vista.elementoBorrado(notaActual);
    borradoNota.addEventListener("click", borrarNota);
    //Actualizo LocalStorage
    actualizarLocalStorage();
}

function borrarNota(e) {
    // Define contenedorNota
    contenedorNota = e.target.parentNode;
    //Borro el modelo
    misNotas.eliminarNota(contenedorNota.id);
    //Borro la vista
    vista.borrarNota("app", contenedorNota);
    //Actualizo LocalStorage
    actualizarLocalStorage();
}

