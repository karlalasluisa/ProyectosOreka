import React from 'react'
import { useState } from 'react';

const FrmConRadioButton = () => {

  const [opcion, setOpcion]= useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(opcion);
    setOpcion("");
  }

  return (
    <div>
       <form onSubmit={handleSubmit}>
            <h1>Frm Radio Button</h1>
            <label>Tarjeta</label>
            <input value="tarjeta" type='radio' name="opcion" checked={opcion === "tarjeta"} onChange={(e) => setOpcion(e.target.value)}></input>

            <label>Paypal</label>
            <input value="paypal" type='radio'name="opcion" checked={opcion === "paypal"} onChange={(e) => setOpcion(e.target.value)}></input>

            <label>Transferencia</label>
            <input value="transferencia" type='radio' name="opcion" checked={opcion === "transferencia"} onChange={(e) => setOpcion(e.target.value)}></input>
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default FrmConRadioButton
