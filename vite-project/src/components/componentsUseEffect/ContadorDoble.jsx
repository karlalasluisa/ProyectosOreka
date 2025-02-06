import { useState, useEffect } from "react";

function ContadorDoble() {
  const [count, setCount] = useState(0);
  const [mensaje, setMensaje] = useState("Inicia el contador");

  useEffect(() => {
    setMensaje(`El contador está en ${count}`);
  }, [count]); // Se ejecuta cada vez que `count` cambia

  return (
    <div>
      <p>Mensaje: {mensaje}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default ContadorDoble;
//el mensaje se actualiza cada vez que el count cambia