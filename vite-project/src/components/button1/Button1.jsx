import React, { useEffect, useState } from 'react'
import "./Button1.css";


const Button1 = () => {
    const [conteo,setConteo]=useState(0);
    const [paso, setPaso]= useState(2)

    const handleSumar=()=>{
        console.log(eval(conteo+paso))
        setConteo(eval(conteo+paso));
    }
    const handleRestar=()=>{
        console.log(eval(conteo-paso))
        setConteo(eval(conteo-paso));
    }

    const handlePasoModificado=(evento)=>{
        //console.log(eval(evento.target));
        setPaso(Number(evento.target.value))
    }

    useEffect(()=> {
        setConteo(conteo+4);
      }, []);

    
  return (
    <div>
        <input type="number" placeholder='ingresa un número' value={paso} onChange={handlePasoModificado}></input>
        <button onClick={handleSumar}>+</button>
        <p>{conteo}</p>
        <button onClick={handleRestar}>-</button>

    
    </div>
  )
}

export default Button1


// 1. Contador con pasos personalizados
// Crear un contador que incremente o disminuya en pasos personalizados (e.g., de 2 en 2).
// Usar un input para definir el tamaño del paso.

