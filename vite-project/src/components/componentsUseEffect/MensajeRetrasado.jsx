import { useState, useEffect } from "react";

function MensajeRetrasado() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMensaje("¡Este mensaje apareció después de 3 segundos!");
    }, 3000);

    return () => clearTimeout(timer); // Limpieza del temporizador
  }, []);

  return <p>{mensaje}</p>;
}

export default MensajeRetrasado;
// El useEffect solo se ejecuta una vez cuando el array de dependencias está vacío. Solo se ejecutará cuando el componente se monta
// useEffect(() => {
//     console.log("Este efecto se ejecuta solo una vez");
//   }, []); // 🔹 Array de dependencias vacío
  
//El useEffect se puede ejecutar varias veces cuando tiene dependencias y estas cambian.
//Se ejecuta cuando el componente se monta y cada vez que cambia contador.

// const [contador, setContador] = useState(0);

// useEffect(() => {
//   console.log("Este efecto se ejecuta cuando cambia 'contador'");
// }, [contador]); // 🔹 Se ejecuta cada vez que cambia 'contador'

//Cuando retornamos una función dentro de useEffect, esta se ejecuta cuando el componente se desmonta.