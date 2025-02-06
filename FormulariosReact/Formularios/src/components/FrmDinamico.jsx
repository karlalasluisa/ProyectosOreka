import React, { useState } from 'react'

const FrmDinamico = () => {
    const usuarios = [
        { id: 0, nombre: "Selecciona usuario", email: "", mensaje: "" },
        { id: 1, nombre: "Juan", email: "juan@example.com", mensaje: "Hola, soy Juan" },
        { id: 2, nombre: "María", email: "maria@example.com", mensaje: "Hola, soy María" },
        { id: 3, nombre: "Carlos", email: "carlos@example.com", mensaje: "Hola, soy Carlos" }
      ];

      const [userSeleccionado, setUserSeleccionado] = useState(usuarios[0]);


      const handleSeleccionar = (e)=>{

        let idUser = parseInt(e.target.value, 10); // Convertir a número
        console.log(idUser);
        
        let usuario = usuarios.find(usuario => usuario.id == idUser);
        setUserSeleccionado(usuario);
      }
      
  return (
    <div>
        <h1>Formulario Dinámico</h1>
        <label > Selecciona un usuario:</label>
        <select value={userSeleccionado} onChange={handleSeleccionar}>
            {usuarios.map((usuario) =>(
                <option key={usuario.id} value={usuario.id}>{usuario.nombre}</option>
            ))}
        </select>

        <form>
            <label>Nombre:
                <input type="text" value={userSeleccionado.nombre} readOnly  ></input>
            </label><br></br>
            <label>Email:
                <input type="text" value={userSeleccionado.email} readOnly  ></input>
            </label><br></br>
            <label>Mensaje:
                <input type="text" value={userSeleccionado.mensaje} readOnly  ></input>
            </label>
        </form>

    </div>
  )
}

export default FrmDinamico