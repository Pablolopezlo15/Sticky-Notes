class Nota {
    constructor(titulo, texto, id){
        this.titulo = titulo;
        this.texto = texto;
        this.fechaCreacion = new Date();
        this.id = id;
    }
}

class ListaNotas {
    
    constructor(){
        this.lista = [];
        this.idNota = 0; 
    }

    añadirNota(titulo, texto){
        this.lista.push(new Nota(titulo, texto, this.idNota++));
    }

    cargarNotas() {
        // Recupera las notas del localStorage
        var notasGuardadas = window.localStorage.getItem("notas");
    
        // Si hay notas guardadas, las convierte de JSON a un objeto JavaScript
        if (notasGuardadas) {
            var objetoListaNotas = JSON.parse(notasGuardadas);
    
            // Asigna las notas y el idNota del objetoListaNotas a this.lista y this.idNota
            this.lista = objetoListaNotas.lista;
            this.idNota = objetoListaNotas.idNota;
        }
    }

    //Devuelve la posicion en la que esta la nota con id o -1 si no la encuentra.
    localizaNota(id) {
        let i;
        let encontrado = false;
        for(i = 0; !encontrado && i<this.lista.length; i++){
            if(this.lista[i].id == id){
                encontrado = true;
            }
        }
        if (encontrado){
            return i-1;
        }
        else{
            return -1;
        }
    }

    eliminarNota(id){
        var posicion = this.localizaNota(id);
        if(posicion >= 0){
            this.lista.splice(posicion, 1);
        }
    }

    editarNota(id, nuevoTitulo, nuevoTexto){
        var posicion = this.localizaNota(id);
        if (posicion >= 0){
            this.lista[posicion].titulo = nuevoTitulo;
            this.lista[posicion].texto = nuevoTexto;
        }
    }
}