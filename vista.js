class vistaNotas{
    
    creaNota(nota, idDiv) {
        let contenedor = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.innerHTML = nota.titulo;
        let h2 = document.createElement("h2");
        h2.innerHTML = nota.texto;
        let buttonBorrar = document.createElement("button");
        contenedor.appendChild(h1);
        contenedor.appendChild(h2);
        contenedor.appendChild(buttonBorrar);
        buttonBorrar.innerHTML = "Borrar";

        contenedor.nota = nota;
        contenedor.id = nota.id;

        document.getElementById(idDiv).appendChild(contenedor);

    }

    borrarNota(idDiv, contenedorNota) {
        console.log("borrado")
        document.getElementById(idDiv).removeChild(contenedorNota);
    }

    elementoBorrado(nota) {
        return document.getElementById(nota.id).getElementsByTagName("button")[0];
    }
}

class VistaCompleja {

    creaNota(nota, idDiv) {
        let contenedor = document.createElement("div");
        contenedor.className = "nota";
        let textareaTitulo = document.createElement("textarea");
        textareaTitulo.innerHTML = nota.titulo;
        textareaTitulo.className = "titulo";
        let textarea = document.createElement("textarea");
        textarea.innerHTML = nota.texto;

        let buttonBorrar = document.createElement("button");
        buttonBorrar.className = "btn";
        buttonBorrar.innerHTML = "Borrar";

        contenedor.appendChild(textareaTitulo);
        contenedor.appendChild(textarea);
        contenedor.appendChild(buttonBorrar);

        contenedor.nota = nota;
        contenedor.id = nota.id;

        document.getElementById(idDiv).appendChild(contenedor);


        let dragging = false;
        let offset = { x: 0, y: 0 };
    
        // Maneja el evento de presionar el botón del ratón
        contenedor.addEventListener('mousedown', (event) => {
            dragging = true;
            offset = { 
                x: event.clientX - contenedor.offsetLeft, 
                y: event.clientY - contenedor.offsetTop 
            };
        });
    
        // Maneja el evento de mover el ratón
        contenedor.addEventListener('mousemove', (event) => {
            if (dragging) {
                contenedor.style.position = 'absolute';
                contenedor.style.left = (event.clientX - offset.x) + 'px';
                contenedor.style.top = (event.clientY - offset.y) + 'px';
            }
        });
    
        // Maneja el evento de soltar el botón del ratón
        contenedor.addEventListener('mouseup', () => {
            dragging = false;
        });


    }

    borrarNota(idDiv, contenedorNota) {
        console.log("borrado")
        document.getElementById(idDiv).removeChild(contenedorNota);
    }

    elementoBorrado(nota) {
        return document.getElementById(nota.id).getElementsByTagName("button")[0];
    }

    // mostrarNotas(listaNotas) {
    //     listaNotas.forEach(nota => {
    //         // Crea un nuevo elemento de nota en el DOM
    //         var newNote = document.createElement('div');
    //         newNote.classList.add('note');
    //         newNote.innerHTML = `
    //             <h2>${nota.titulo}</h2>
    //             <p>${nota.texto}</p>
    //         `;

    //         // Agrega la nueva nota al contenedor de notas
    //         document.getElementById('app').appendChild(newNote);
    //     });
    // }
    
    mostrarNotas(listaNotas, idDiv) {
        listaNotas.forEach(nota => {
            this.creaNota(nota, idDiv);
        });
    }

}