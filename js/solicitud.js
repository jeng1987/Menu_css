// POO
/*Clase: Elemento del mundo real del cual puedo obtner Información.
Abstraccion: Observar, analizar, filtrar, resultado.
Clases: Abstractas, Reales.
atributos: Caracteristicas de una Clase.
Objeto: Representante o ejemplar de una clase
metodos:Describen el comportamiento de una clase(Acciones).
parametros: Espacios de memoria definidos para compartir datos clases, metodos.

Variables: son elementos que consumen memoria y varian su valor durante la ejecucion de un programa.
Constantes:  son elementos que consumen memoria pero NO varian su valor durante la ejecución de un programa.
*/

class Solicitud{
    constructor(cedula,nombre,apellido,tipo){
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo = tipo;
    }
}
class Vista{
    InsertarSolicitud(Solicitud){
        const listaSolicitud = document.getElementById('lista');
        const etiqueta = document.createElement('div');
        etiqueta.innerHTML=`<div class="impresion">
                            <p>${Solicitud.cedula}</p>
                            <p>${Solicitud.nombre}</p>
                            <p>${Solicitud.apellido}</p>
                            <p>${Solicitud.tipo}</p>
                            </div>`
        listaSolicitud.appendChild(etiqueta);

    }
    LimpiarFormulario(){
        document.getElementById("formulario").reset();
    }
}
document.getElementById("formulario").addEventListener("submit", function(e){
    const cedula = document.getElementById("cedula").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const tipo = document.getElementById("tipo_e").value;

    if(cedula === '' || nombre === '' || apellido === '' ||  tipo === '--Seleccione una opción de equipo--'){
        alert("Cedula, Nombre, Apellido, Tipo, no pueden ir vacios o debe seleccionar al menos una opción");
    }else{    
        let sol = new Solicitud(cedula,nombre,apellido,tipo);
        let vista = new Vista();
        vista.InsertarSolicitud(sol);
        vista.LimpiarFormulario();
        e.preventDefault();
    }
});

document.getElementById("lista").addEventListener("click",function(e){
    let vista = new Vista();
    vista.LimpiarFormulario(e.target);
});