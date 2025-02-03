
// 4. Cambiar el color de fondo
// Crear botones para cambiar el color de fondo de una caja (e.g., rojo, azul, verde).
import React, { useState } from 'react'
import "./Button3.css"
const Button3 = () => {

    const [color, setColor]= useState("");

    const handleCambiarColor=(colorSeleccionado)=>{
        setColor(colorSeleccionado);
    }


  return (
    <div>
        <button onClick={()=>handleCambiarColor("red")}>Rojo</button>{/*el error era que sin (), mi función se ejecutaría inmediatamente cuando se renderiza el componente  */}
        <button onClick={()=>handleCambiarColor("blue")}>Azul</button>{/*  */}
        <button onClick={()=>handleCambiarColor("green")}>Verde</button>

        <div id="caja_colores" style={{backgroundColor:color}}></div>

    </div>
  )
}

export default Button3