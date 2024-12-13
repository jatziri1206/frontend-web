import React, { useState } from 'react';
import axios from 'axios';

const RegistroMateria = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/materias', { nombre, descripcion })
      .then(response => {
        alert('Materia registrada exitosamente');
        setNombre('');
        setDescripcion('');
      })
      .catch(error => {
        console.error('Hubo un error al registrar la materia:', error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Registro de Materia</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre de la Materia</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            className="form-control"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroMateria;
