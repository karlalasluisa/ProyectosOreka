import React from 'react'
import ContadorDoble from './ContadorDoble'
import ContadorUseEffect from './ContadorUseEffect'
import PosicionMouse from './PosicionMove'
import Reloj from './Reloj'
import MensajeRetrasado from './MensajeRetrasado'
const TodosComponentesUseEffect = () => {
  return (
    <div>
        <p>1. El useEffect solo se ejecuta una vez cuando el array de dependencias está vacío. Solo se ejecutará cuando el componente se monta</p>
        <p>2. El useEffect se puede ejecutar varias veces cuando tiene dependencias y estas cambian y  cuando el componente se monta.</p>
        <p>3. Cuando retornamos una función dentro de useEffect, esta se ejecuta cuando el componente se desmonta--- generalmente en Limpieza</p>
        {/* <div>
            <h2>Contador Completo UseEffect </h2>
            <ContadorUseEffect/>
        </div> */}
        <div>
            <h2>Reloj</h2>
            <Reloj/>
        </div>
        <div>
            <h2>Contador con mensaje</h2>
            <ContadorDoble/>
        </div>
        <div>
            <h2>Movimiento de mouse</h2>
            <PosicionMouse/>
        </div>
        <div>
            <h2>Mensaje Retrasado</h2>
            <MensajeRetrasado/>
        </div>
    </div>
  )
}

export default TodosComponentesUseEffect