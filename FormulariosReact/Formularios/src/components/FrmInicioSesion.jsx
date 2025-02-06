import React, { useState } from "react";

const FrmInicioSesion = () => {

// Estado para inicializar y almacenar los valores del form 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    description: "",
  });
// Estado para manejar los mensajes de error y validaciones
  const [errors, setErrors] = useState({
    passwordLength: "",
    passwordMatch: "",
    descriptionLength: 200,
  });

// Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado con los nuevos valores ingresados
    setFormData({ ...formData, [name]: value });

    // Validaciones dinámicas según el campo que se esté modificando
    if (name === "password") {
      setErrors({
        ...errors,
        passwordLength: value.length < 8 ? "La contraseña debe tener al menos 8 caracteres." : "",
      });
    }


    if (name === "confirmPassword") {
      setErrors({
        ...errors,
        passwordMatch: value !== formData.password ? "Las contraseñas no coinciden." : "",
      });
    }

    if (name === "description") {
      setErrors({
        ...errors,
        descriptionLength: 200 - value.length, // Contador de caracteres restantes
      });
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si hay errores antes de enviar el formulario
    if (!errors.passwordLength && !errors.passwordMatch) {
      alert("FrmInicioSesion enviado correctamente 🎉");
      alert(formData);
    } else {
      alert("Corrige los errores antes de enviar el FrmInicioSesion ❌");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>FrmInicioSesion Completo</h2>
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        {/* formData está inicializado con valores a " " para que no de errores al cargar la página */}

        {/* Contraseña */}
        <div>
          <label>Contraseña:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          {errors.passwordLength && <p style={{ color: "red" }}>{errors.passwordLength}</p>}
        </div>

        {/* Confirmar Contraseña */}
        <div>
          <label>Confirmar Contraseña:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          {errors.passwordMatch && <p style={{ color: "red" }}>{errors.passwordMatch}</p>}
        </div>

        {/* Descripción con límite de caracteres */}
        <div>
          <label>Descripción (máx. 200 caracteres):</label>
          <textarea name="description" value={formData.description} onChange={handleChange} maxLength="200" />
          <p>Caracteres restantes: {errors.descriptionLength}</p>
        </div>

        {/* Botón de envío */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FrmInicioSesion;
