import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListadoGrupos = () => {
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    axios.get('web-jat-backend.vercel.app/api/grupos')
      .then(response => {
        setGrupos(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los grupos disponibles:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Grupos Disponibles</h2>
      <div className="list-group">
        {grupos.map(grupo => (
          <div key={grupo.id} className="list-group-item">
            <h5 className="mb-1">{grupo.nombre}</h5>
            <p className="mb-1">Descripción: {grupo.descripcion}</p>
            <p className="mb-1">Docente: {grupo.nombreProfesor}</p>
            <p className="mb-1">Materia: {grupo.materia_nombre}</p>
            <p className="mb-1">Alumnos:</p>
            <ul>
              {grupo.alumnos && grupo.alumnos.map(alumno => (
                <li key={alumno.id}>{alumno.nombre} {alumno.apellidos} ({alumno.nocontrol})</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListadoGrupos;
