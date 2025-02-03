import React, {useState} from 'react'

const Button2 = () => {
    
    const [oculto, setOculto] =useState(false);

    const handleOcultarMostrarTxt=()=>{
        
        setOculto(!oculto)
        
    }
  return (
    <div>
        <button onClick={handleOcultarMostrarTxt}>Ocultar/Mostrar</button>
        {!oculto && <p>un texto cualquiera</p>}
    </div>
  )
}

export default Button2
// 3. Mostrar/Ocultar un texto
// Crear un botón que muestre o oculte un texto al hacer clic.
