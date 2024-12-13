import React, { useState } from 'react';
import axios from 'axios';

const RegistroAlumno = () => {
  const [formData, setFormData] = useState({
    idgrupo: '',
    nocontrol: '',
    nombre: '',
    apellidos: '',
    telefono: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://web-jat-backend.vercel.app/api/alumnos', formData)
      .then(response => {
        console.log('Alumno registrado:', response.data);
      })
      .catch(error => {
        console.error('Error al registrar alumno:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="idgrupo">ID del Grupo</label>
        <input
          type="text"
          className="form-control"
          id="idgrupo"
          name="idgrupo"
          value={formData.idgrupo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="nocontrol">No. de Control</label>
        <input
          type="text"
          className="form-control"
          id="nocontrol"
          name="nocontrol"
          value={formData.nocontrol}
          onChange={handleChange}
          required
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
          required
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
          required
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
          required
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
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Registrar Alumno</button>
    </form>
  );
};

export default RegistroAlumno;
