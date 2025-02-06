import React from 'react'
import { useState } from 'react'
const FrmConCheckbox = () => {
    const [aceptado, setAceptado] = useState(false);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!aceptado) {
            alert("Debe aceptar los términos y condiciones");
            return;
        }
        alert("Aceptado:", aceptado);
    }

    

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>FrmConCheckbox</h1>
            <label htmlFor="validacion">Validar Términos y condiciones:</label>
            <input type="checkbox" id="validacion" onChange={(e) => setAceptado(e.target.checked)} />
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default FrmConCheckbox