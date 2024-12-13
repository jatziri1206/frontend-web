import React, { useState } from 'react';
import axios from 'axios';

const RegistroUsuario = () => {
  const [formData, setFormData] = useState({
    nocontrol: '',
    nombre: '',
    apellidos: '',
    telefono: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(field => field === '')) {
      setError('Todos los campos son obligatorios');
      return;
    }
    axios.post('http://localhost:5000/api/usuarios', formData)
      .then(response => {
        console.log('Usuario registrado:', response.data);
        setError('');
        setSuccess('Usuario registrado exitosamente');
      })
      .catch(error => {
        console.error('Error al registrar usuario:', error);
        setError('Hubo un error al registrar el usuario');
        setSuccess('');
      });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="card p-4">
        <h2 className="mb-4">Registrar Usuario</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <div className="form-group">
          <label htmlFor="nocontrol">No. de Control</label>
          <input
            type="text"
            className="form-control"
            id="nocontrol"
            name="nocontrol"
            value={formData.nocontrol}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos</label>
          <input
            type="text"
            className="form-control"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroUsuario;
