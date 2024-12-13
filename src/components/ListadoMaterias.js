import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListadoMaterias = () => {
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    axios.get('https://web-jat-backend.vercel.app/api/materias')
      .then(response => {
        setMaterias(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener las materias:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Listado de Materias</h2>
      <div className="list-group">
        {materias.map(materia => (
          <div key={materia.id} className="list-group-item">
            <h5 className="mb-1">{materia.nombre}</h5>
            <p className="mb-1">{materia.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListadoMaterias;
