/* * EJERCICIO: * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto *   en tu lenguaje. 
* - Utiliza operaciones de inserción, borrado, actualización y ordenación. * * DIFICULTAD EXTRA (opcional): 
* Crea una agenda de contactos por terminal. * - Debes implementar funcionalidades de búsqueda, inserción, actualización *   
y eliminación de contactos. * - Cada contacto debe tener un nombre y un número de teléfono. 
* - El programa solicita en primer lugar cuál es la operación que se quiere realizar, 
*   y a continuación los datos necesarios para llevarla a cabo. * -
 El programa no puede dejar introducir números de teléfono no númericos y con más *   
 de 11 dígitos (o el número de dígitos que quieras). * -
  También se debe proponer una operación de finalización del programa. */
const rl = require('readline-sync');

const contactos=[
    {nombre:"Juan", telefono:"123456"},
    {nombre:"Pedro", telefono:"123456"},
]


const MostrarMenu=()=>{
    while(true){
        console.log("\n------- Agenda de Contactos -------")
        console.log("\n[1] Añadir contacto \n[2] Borrar Contacto\n[3] Modificar contacto\n[4] Buscar Contacto\n[5] Mostrar la lista de contactos\n[6] Salir ");


        let opcion = parseInt(rl.question("\nElige una opción:"));
    
        
        switch(opcion){
            case 1:
                console.log(añadirContacto());
                break;

            case 2: 
                console.log(borrarContacto());
                break;

            case 3:
                console.log(modificarContacto());
                break;

            case 4:
                console.log(buscarContacto());
                break;
            
            case 5:
                console.log(contactos);
                break;

            case 6:
                console.log ("Adiós!");
                return;

            default:
                console.log("Selección incorrecta. Prueba de nuevo");
                MostrarMenu();
        }
    }
    
}

const validarNumeroTel=(numero)=>{
    if (!Number.isInteger(parseInt(numero))){
        return "El número contiene caracteres erróneos";
    }

    if (numero.length>11 ){
        return "El número no puede tener más de 11 dígitos";
    }
    return "";
}

const añadirContacto=()=>{
    
    let error="";
    
    let nombre = rl.question("Introduce un nombre: ");

    let telefono = rl.question("Introduce un teléfono: ");

    if(validarNumeroTel(telefono) !=""){
        error= validarNumeroTel(telefono);
    }

    if (error!=""){
        return error;
    };

    let contacto = {nombre: nombre, telefono: telefono}
    contactos.push(contacto);
    
    return "Contacto agregado: "+ nombre+" - "+ telefono;

}
const buscarContacto=()=>{

    let nombre = rl.question("Introduce el nombre del contacto a buscar: ");

    const contacto = contactos.find(cont=> cont.nombre.toLowerCase() ===nombre.toLowerCase());

    if (contacto != null){
        return contacto.nombre+ " "+ contacto.telefono;
    }else{
        return "El nombre no existe en la lista de contactos"
    }
}

const borrarContacto=()=>{
    let nombre = rl.question("Introduce el nombre del contacto a borrar: ");

    let indexBorrar= contactos.findIndex(cont => cont.nombre.toLowerCase() ===nombre.toLowerCase());

    if(indexBorrar){
        contactos.splice(indexBorrar, 1); //borra esa posición (index), 1 elemento
        return "Contacto "+ nombre + " borrado con éxito."
    }else{
        return "No se ha encontrado ese contacto"
    }
}

const modificarContacto=()=>{
    let nombre = rl.question("Introduce el nombre del contacto a modificar: ");
    
    let contacto=contactos.find(cont => cont.nombre.toLowerCase() ===nombre.toLowerCase());
    let indexBuscar=contactos.findIndex(cont => cont.nombre.toLowerCase() ===nombre.toLowerCase());

    if(contacto){
        console.log(contacto);
        while(true){

            let datoModificar= rl.question("¿Deseas modificar el nombre o teléfono?(N/T): ").toUpperCase();
    
            if(datoModificar ==="N"){
                let nuevoNombre = rl.question("Nuevo nombre: ");
    
                contactos[indexBuscar].nombre = nuevoNombre;
                break;  
                
    
            }else if (datoModificar ==="T"){
                let nuevoTlef = rl.question("Nuevo teléfono: ");
                
                contactos[indexBuscar].telefono = nuevoTlef;
                break;
            }
            else{
                console.log("Selección errónea. Intenta de nuevo")
            }
            
        }
        
        return "Contacto modificado exitosamente: " + contactos[indexBuscar].nombre +" " +contactos[indexBuscar].telefono;
    
    }else{
       return "No se ha encontrado ese contacto";
    }
    
}

MostrarMenu();