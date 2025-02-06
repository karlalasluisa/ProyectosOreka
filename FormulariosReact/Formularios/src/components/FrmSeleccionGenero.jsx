import React from 'react'
import { useState } from 'react';
const FrmSeleccionGenero = () => {
    const [generoSeleccionado, setGeneroSeleccionado] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(generoSeleccionado);
        setGeneroSeleccionado("");
      };
    
  return (
    <div>
         <form onSubmit={handleSubmit}>
            <h1>Frm seleccionar género</h1>
            <label htmlFor="validacion">Seleccionar género: </label>
            <select name="genero" value={generoSeleccionado} id="genero" onChange={(e) => setGeneroSeleccionado(e.target.value)}>
                <option value="">Elige género</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
                <option value="PrefieroNoDecirlo">Prefiero no decirlo</option>
            </select>
            
            <button type="submit">Enviar</button>
        </form>

    </div>
  )
}

export default FrmSeleccionGenero