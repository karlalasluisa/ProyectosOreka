import React from 'react'
import { useState } from 'react';

const FrmEdadRestriccion = () => {

    const [edad, setEdad]= useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validarEdad(edad)) return;
        alert("Edad aceptada.");
    }

    const validarEdad = (edad) => {
        if (edad < 18) {
          alert("No puede ingresar, usted es menor de edad.");
          return false;
        }
        return true;
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Form Edad</h1>
            <label>Edad</label>
            <input value={edad} type="number" name="edad" onChange={(e) => setEdad(e.target.value)}></input>
            
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default FrmEdadRestriccion