import React ,  { useState } from 'react';
import "./Calculadora2.css";

const Calculadora2 = () => {
    const [resultado, setResultado]=useState("hjiu");

    const handleCalcularOperacion=()=>{
        let result = 0;
       
        setResultado(result);
    }
    
  return (
    <div className='contenedor__calculadora'>
      <div className="pantalla">
          <p>{resultado}</p>
      </div>
      <div className="botones">
          <button type="button" className="operacion btnBorrar">C</button>
          <button type="button" className="operacion btnDividir">/</button>
          <button type="button" className="operacion btnMultiplicar">X</button>
          <button type="button" className="operacion btnRestar">-</button>
          
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="operacion btnSumar">+</button>

          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          
          <button type="button">0</button>
          <button type="button" className="operacion btnIgual" onClick={handleCalcularOperacion}>=</button>
      </div>
    </div>
  )
}

export default Calculadora2