import { useState, useEffect } from "react";

const ContadorUseEffect =()=>{
  const [contador, setContador] = useState(0);

  useEffect(() => {
    alert("🔹 Se ejecuta SOLO una vez al montar el componente");
  }, []);// sin dependencias

  useEffect(() => {
    alert("🔸 Se ejecuta en CADA render");
  });// puede ocasionar errores

  useEffect(() => {
    alert(`🔹 Se ejecuta cuando cambia 'contador': ${contador}`);
  }, [contador]); //con dependencias
 
  useEffect(() => {
    alert("✅ Se ejecuta al montar y se limpia al desmontar");

    return () => {
      alert("❌ Limpieza: Se ejecuta cuando el componente se desmonta");
    };
  }, []);

  return (
    <div>
      <h3>Contador: {contador}</h3>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
}

export default ContadorUseEffect;
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
