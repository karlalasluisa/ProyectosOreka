import React, { useState } from "react";
 
export default function Formulario1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
 
  const [submittedData, setSubmittedData] = useState(null);
 
  /**
   * Función handleChange:
   * Esta función se encarga de actualizar el estado del formulario cada vez que el usuario
   * escribe en alguno de los campos. Se desestructura el evento para obtener el nombre del campo
   * y su valor, y se actualiza el estado utilizando la sintaxis de "spread operator".
   */
 
  const handleChange = (e) => {
    // Desestructuramos el objeto target para extraer "name" y "value"
    const { name, value } = e.target;
    // Actualizamos el estado del formulario, preservando los valores anteriores
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 
  /**
   * Función handleSubmit:
   * Esta función se invoca al enviar el formulario. Previene el comportamiento
   * por defecto del formulario (recargar la página) y, en este ejemplo,
   * almacena los datos enviados en el estado "submittedData".
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    // Aquí podrías enviar los datos a un servidor, limpiar el formulario, etc.
  };
 
  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo para el nombre */}
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ingresa tu nombre"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
 
        {/* Campo para el email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
 
        {/* Campo para el mensaje */}
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Escribe tu mensaje"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
 
        {/* Botón para enviar el formulario */}
        <button type="submit">Enviar</button>
      </form>
 
      {/* Se muestran los datos enviados después del envío del formulario */}
      {submittedData && (
        <div>
          <h3>Datos Enviados:</h3>
          <p>
            <strong>Nombre:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Mensaje:</strong> {submittedData.message}
          </p>
        </div>
      )}
    </div>
  );
}