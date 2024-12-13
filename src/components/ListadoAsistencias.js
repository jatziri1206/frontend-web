import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListadoAsistencias = () => {
  const [asistencias, setAsistencias] = useState([]);

  useEffect(() => {
    axios.get('https://web-jat-backend.vercel.app/api/asistencias')
      .then(response => {
        setAsistencias(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener las asistencias:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Listado de Asistencias</h2>
      <div className="list-group">
        {asistencias.map(asistencia => (
          <div key={asistencia.id} className="list-group-item">
            <h5 className="mb-1">No. Control: {asistencia.nocontrol}</h5>
            <p className="mb-1">ID Grupo: {asistencia.idgrupo}</p>
            <p className="mb-1">Fecha: {new Date(asistencia.fecha).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListadoAsistencias;
