import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faCheckCircle, faTimesCircle, faFaceLaughWink, faHandsClapping } from '@fortawesome/free-solid-svg-icons';
import './assets/style/App.css';
import ComponenteInput from './components/ComponenteInput.jsx'; // Importamos el componente del input

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const mihandleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const mihandleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const mihandleSubmit = () => {
    if (password === 'cursito') {
      setMessage(
        <span className='aprobado'>
          Bienvenido a nuestro sitio: {username}!! <FontAwesomeIcon icon={faHandsClapping} />
        </span>
      );
    } else {
      setMessage(
        <span className='error'>
          Contraseña incorrecta, intente de nuevo <FontAwesomeIcon icon={faFaceLaughWink} />
        </span>
      );
    }
  };

  return (
    <div className="background">
      <div className="container">
        <h1>Hola {username}</h1>
        <ComponenteInput
          icon={faUser}
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={mihandleChangeUsername}
        />
        <ComponenteInput
          icon={faLock}
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={mihandleChangePassword}
        />
        <button onClick={mihandleSubmit}>Entrar</button>
        {message && (
          <p className={password === 'cursito' ? 'success' : 'error'}>
            <FontAwesomeIcon icon={password === 'cursito' ? faCheckCircle : faTimesCircle} />
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
