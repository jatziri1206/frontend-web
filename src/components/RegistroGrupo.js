import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegistroGrupo = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [nombreProfesor, setNombreProfesor] = useState('');
  const [idmateria, setIdmateria] = useState('');
  const [alumnos, setAlumnos] = useState([]);
  const [selectedAlumnos, setSelectedAlumnos] = useState([]);
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    // Obtener la lista de alumnos (usuarios)
    axios.get('http://localhost:5000/api/usuarios')
      .then(response => {
        setAlumnos(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los alumnos:', error);
      });

    // Obtener la lista de materias
    axios.get('http://localhost:5000/api/materias')
      .then(response => {
        setMaterias(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener las materias:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/grupos', { nombre, descripcion, nombreProfesor, idmateria })
      .then(response => {
        const grupoId = response.data.id;
        // Añadir alumnos al grupo
        selectedAlumnos.forEach(alumnoId => {
          axios.post('http://localhost:5000/api/grupos/alumnos', { grupoId, alumnoId });
        });
        alert('Grupo registrado exitosamente');
        setNombre('');
        setDescripcion('');
        setNombreProfesor('');
        setIdmateria('');
        setSelectedAlumnos([]);
      })
      .catch(error => {
        console.error('Hubo un error al registrar el grupo:', error);
      });
  };

  const handleAlumnoChange = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedAlumnos(value);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Registro de Grupo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre del Grupo</label>
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
        <div className="form-group">
          <label htmlFor="nombreProfesor">Nombre del Profesor</label>
          <input
            type="text"
            className="form-control"
            id="nombreProfesor"
            value={nombreProfesor}
            onChange={(e) => setNombreProfesor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="idmateria">Materia</label>
          <select
            className="form-control"
            id="idmateria"
            value={idmateria}
            onChange={(e) => setIdmateria(e.target.value)}
            required
          >
            <option value="">Seleccione una materia</option>
            {materias.map(materia => (
              <option key={materia.id} value={materia.id}>
                {materia.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="alumnos">Alumnos</label>
          <select
            multiple
            className="form-control"
            id="alumnos"
            value={selectedAlumnos}
            onChange={handleAlumnoChange}
          >
            {alumnos.map(alumno => (
              <option key={alumno.id} value={alumno.id}>
                {alumno.nombre} {alumno.apellidos} ({alumno.nocontrol})
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroGrupo;
