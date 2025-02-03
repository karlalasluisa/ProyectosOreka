import React, { useState } from 'react'
// 2. Caja de texto controlada
// Crear un campo de texto que muestre en tiempo real lo que el usuario escribe debajo de la caja de texto.


const CajaTexto = () => {
  const [texto, setValorTexto]= useState("");

  const handleCambiarTexto=(evento)=>{
    setValorTexto(evento.target.value)
  }

  return (
    <div>
        <p>Caja de Texto controlada</p>
        <input type="text" value={texto} placeholder='Escribe algún texto' onChange={handleCambiarTexto}></input>
        <p>{texto}</p>

    </div>
  )
}

export default CajaTexto