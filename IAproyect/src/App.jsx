import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FaUser, FaRobot, FaPaperPlane } from "react-icons/fa";
import { ejemplo } from "./apiKeys";
 
const API_KEY = "AIzaSyAI0tWfnyHrvidCjEnthr3I4x9Kr8uUz0I"; // 🔴 Reemplaza con tu API Key
const API_KEY_OPEN_WEATHER = "bf1534724ffd5b09be3d3f5ad5dbbf02";

const Chat = () => {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
 
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState({});

  const search = (city) => {
    axios
      .get(
        `${ejemplo.base}weather?q=${
          city != "[object Object]" ? city : query
        }&units=metric&APPID=${ejemplo.key}`
      )
      .then((response) => {
        setWeather(response.data);
        setQuery("");
      })
      .catch(function (error) {
        console.log(error);
        setWeather("");
        setQuery("");
        setError({ message: "Not Found", query: query });
      });
  };
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
 
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

 //función para obtener el clima de la api

 const getWeather = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_OPEN_WEATHER}&units=metric`

    );

  } catch (error) {
    console.error("No pude obtener el clima. Intenta con otro nombre de ciudad."+ error.msg) ;
  }
};


  const sendMessage = async () => {
    if (!input.trim()) return;
 
    const userMessage = { user: "You", text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
 
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          contents: [{ parts: [{ text: input }] }],
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
 
      const botText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No tengo respuesta.";
      setMessages((prev) => [...prev, { user: "Gemini", text: botText, isUser: false }]);
    } catch (error) {
      console.error("Error con Gemini:", error);
      setMessages((prev) => [...prev, { user: "Gemini", text: "Error al conectar con la API.", isUser: false }]);
    }
 
    setInput("");
  };
 
  return (
    <div style={styles.chatContainer}>
      <div className="today-weather">

<div className="search-box">
<input
            type="text"
            className="search-bar"
            placeholder="Search any city"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
<div className="img-box">
            {" "}
<img
              src="https://images.avishkaar.cc/workflow/newhp/search-white.png"
              onClick={search}
            />
</div>
</div>
<ul>
          {typeof weather.main != "undefined" ? (
<div>
              {" "}
<li className="cityHead">
<p>
                  {weather.name}, {weather.sys.country}
</p>
<img
                  className="temp"
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                />
</li>
<li>
                Temperature{" "}
<span className="temp">
                  {Math.round(weather.main.temp)}°c ({weather.weather[0].main})
</span>
</li>
<li>
                Humidity{" "}
<span className="temp">
                  {Math.round(weather.main.humidity)}%
</span>
</li>
<li>
                Visibility{" "}
<span className="temp">
                  {Math.round(weather.visibility)} mi
</span>
</li>
<li>
                Wind Speed{" "}
<span className="temp">
                  {Math.round(weather.wind.speed)} Km/h
</span>
</li>
</div>
          ) : (
<li>
              {error.query} {error.message}
</li>
          )}
</ul>
</div>
      
      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.messageContainer,
              flexDirection: msg.isUser ? "row-reverse" : "row",
            }}
          >
            <div style={styles.avatar}>{msg.isUser ? <FaUser /> : <FaRobot />}</div>
            <div
              style={{
                ...styles.messageBubble,
                backgroundColor: msg.isUser ? "#dcf8c6" : "#fff",
                alignSelf: msg.isUser ? "flex-end" : "flex-start",
              }}
            >
              <strong>{msg.user}:</strong> {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Escribe un mensaje..."
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.sendButton}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};
 
// 🎨 Estilos para el chat estilo WhatsApp
const styles = {
  chatContainer: {
    maxWidth: "400px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  chatBox: {
    padding: "10px",
    height: "400px",
    overflowY: "auto",
    backgroundColor: "#e5ddd5",
  },
  messageContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  avatar: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "#075E54",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    margin: "0 10px",
  },
  messageBubble: {
    padding: "10px",
    borderRadius: "10px",
    maxWidth: "70%",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  },
  inputContainer: {
    display: "flex",
    padding: "10px",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    fontSize: "14px",
    outline: "none",
  },
  sendButton: {
    backgroundColor: "#25D366",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "5px",
    fontSize: "16px",
  },
};
 
export default Chat;
 