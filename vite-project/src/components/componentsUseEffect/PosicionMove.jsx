import { useState, useEffect } from "react";

function PosicionMouse() {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const actualizarPosicion = (e) => {
      setPosicion({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", actualizarPosicion); //listener al objeto window para detectar el evento "mousemove"
    //cada vez que el usuario mueva el mouse, ejecuta la función actualizarPosicion.
    return () => {
      window.removeEventListener("mousemove", actualizarPosicion); // es como apagar el evento cuando el componente se desmonta, es decir, se retira de la interfaz web
    // si no lo retiramos, el listener se seguirá ejecutando pero nada lo estará usando. Eso podría causar errores
    };
  }, []);

  return (
    <div>
      <p>Posición del mouse: X: {posicion.x}, Y: {posicion.y}</p>
    </div>
  );
}

export default PosicionMouse;
