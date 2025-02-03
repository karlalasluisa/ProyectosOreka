/* 4. Calculadora Básica
Crea un componente con:
Dos inputs para ingresar números.
Un dropdown para seleccionar una operación (+, -, *, /).
Un botón para calcular y mostrar el resultado. continua con esto
 
Investiga cómo hacer que funcione un grid básico o las propiedades css y trabajar para hacer una calculadora básica en react
puedes hacer con div y flex la cuadrícula
te permitirá manejar estados
puedes recoger valores de memoria como en calculadoras reales, eso ya tienes la teoría con el useState
 
TODO HACERLO mejor con display
*/
import React, { useState } from 'react';
import "./Calculadora.css";

const Calculadora = () => {
    const [num1, setNum1]=useState(1);
    const [num2, setNum2]=useState(1);
    const [operacion, setOperacion]=useState("+");
    const [resultado, setResultado]=useState("");

    const handleCalcularOperacion=()=>{
        let result = 0;
        switch(operacion){
            case "+": 
                result = num1 + num2;
                break;
            case "-": 
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            default:
                result = 0;
            
        }
        setResultado(result);
    }

  return (
    <div className="calculadora__body">{/*mejor hacerlo con className que con id */}
        <input value={num1} type="number" onChange={(e)=>setNum1(Number(e.target.value))}></input>
        <select value={operacion} onChange={(e)=>setOperacion(e.target.value)}>
            <option value="+">+</option>
            <option value="+">-</option>
            <option value="*">x</option>
            <option value="/">/</option>    
        </select>
        <input value={num2} type="number" onChange={(e)=>setNum2(Number(e.target.value))}></input>
        <button onClick={handleCalcularOperacion}>Calcular resultado</button>
        <p>Resultado : {resultado} </p>
    </div>
  )
}

export default Calculadora
