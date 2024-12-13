import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setAuth }) => {
  const [nocontrol, setNocontrol] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://web-jat-backend.vercel.app/api/login', { nocontrol, password })
      .then(response => {
        console.log('Usuario autenticado:', response.data);
        setAuth(response.data);
        setError('');
      })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
        setError('Error al iniciar sesión. Verifica tus credenciales e intenta nuevamente.');
      });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="card p-4">
        <h2 className="mb-4">Iniciar Sesión</h2>
        <div className="form-group">
          <label htmlFor="nocontrol">No.control</label>
          <input
            type="nocontrol"
            className="form-control"
            id="nocontrol"
            value={nocontrol}
            onChange={(e) => setNocontrol(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        <button type="submit" className="btn btn-primary mt-3">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
