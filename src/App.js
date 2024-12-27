import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");


  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setErrorMessage(""); // Borra el mensaje al hacer otra acción valida
    } else {
      setErrorMessage("Lo siento, no puedes contar en numeros negativos.");
    }
  };

  const handleIncrement = () => {
    if (count < 20) {
      setCount(count + 1);
      setErrorMessage("");
    }
  };

  const handleReset = () => {
    setCount(0);
    setErrorMessage("");
  };

  return (
    <div className="app-container">
      <h1 className="title">Empieza a contar</h1>
      <div className="card-container">
        <h2 className="counter">{count}</h2>
        <div className="button-group">
          <button className="btn btn-decrement" onClick={handleDecrement}>
            <img src="/menos.png" alt="Restar" />
          </button>
          <button className="btn btn-increment" onClick={handleIncrement}>
            <img src="/mas.png" alt="Sumar" />
          </button>
          <button className="btn btn-reset" onClick={handleReset}>
            <img src="/reiniciar.png" alt="Reiniciar" />
          </button>
        </div>
      </div>

      {count === 0 && !errorMessage && (
        <p className="black-message">Usa + y - para empezar a contar</p>
      )}

      {errorMessage && count > -1 && count < 20 && (
        <p className="red-message">{errorMessage}</p>
      )}

      {count === 20 && <p className="message">¡Enhorabuena, has llegado al maximo!</p>}
    </div>
  );
}

export default App;
