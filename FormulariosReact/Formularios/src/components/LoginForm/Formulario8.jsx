// H) **Formulario de inicio de sesión**: Con email y contraseña, muestra un mensaje
// si la contraseña tiene menos de 8 caracteres.
 
import { useState } from "react";
 
//Para usar estos iconos instalar previamente librería react-icons con el comando npm i react-icons
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import "./Formulario8.css";
 
const Formulario8 = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
    } else {
      setError("");
      setEmail("");
      setPassword("");
      setIsRegistering(false);
      alert(isRegistering ? "Registrado exitosamente" : "Inicio de sesión exitoso");
      // setEmail("");
      // setPassword("");
      // setIsRegistering(false);
    }
  };
 
  return (
    <div className="container">
      <div className="form-container">
        <h2>{isRegistering ? "Registro" : "Iniciar Sesión"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
 
          {isRegistering && (
            <div className="input-group">
              <FaUser className="icon" />
              <input type="text" placeholder="Nombre de usuario" required />
            </div>
          )}
 
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
 
          {error && <p className="error">{error}</p>}
 
          <button type="submit">{isRegistering ? "Registrarse" : "Ingresar"}</button>
        </form>
 
        <p className="toggle-text">
          {isRegistering ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}{" "}
          <span onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? "Inicia sesión" : "Regístrate"}
          </span>
        </p>
      </div>
    </div>
  );
};
 
export default Formulario8;