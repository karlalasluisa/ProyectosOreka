
// 5. Switch On/Off
// Crear un botón que funcione como un interruptor, mostrando "On" o "Off" dependiendo del estado.
 

 import React, { useState } from 'react'

 const Button4 = () => {

    const [estadoOn,setEstadoOn]=useState(true);
    
    const handleCambiarEstado=()=>{
        setEstadoOn(!estadoOn)

    }
   return (
     <button onClick={handleCambiarEstado}>{estadoOn ?'On':'Off'}</button>
   )
 }
 
 export default Button4