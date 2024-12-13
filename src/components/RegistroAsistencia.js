import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegistroAsistencia = () => {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [nocontrol, setNoControl] = useState('');
  const [grupoSeleccionado, setGrupoSeleccionado] = useState('');
  const [grupos, setGrupos] = useState([]);
  const [nombremateria, setNombreMateria] = useState('');
  const [idmateria, setIdMateria] = useState('');
  const [idgrupo, setIdGrupo] = useState('');
  const [nombreprofesor, setNombreProfesor] = useState('');
  const [idprofesor, setIdProfesor] = useState('');

  useEffect(() => {
    const currentFecha = new Date().toISOString().split('T')[0];
    const currentHora = new Date().toLocaleTimeString();

    setFecha(currentFecha);
    setHora(currentHora);

    // Obtener la lista de grupos desde el backend
    axios.get('web-jat-backend.vercel.app/api/grupos')
      .then(response => {
        setGrupos(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los grupos:', error);
      });
  }, []);

  const handleGrupoChange = (e) => {
    const grupoId = e.target.value;
    setGrupoSeleccionado(grupoId);

    const grupo = grupos.find(g => g.id.toString() === grupoId);

    if (grupo) {
      setIdGrupo(grupo.id);
      setNombreMateria(grupo.materia_nombre);
      setIdMateria(grupo.idmateria);
      setNombreProfesor(grupo.nombreProfesor);
      setIdProfesor(grupo.idprofesor);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('web-jat-backend.vercel.app/api/asistencias', {
      fecha, idgrupo, nocontrol
    })
      .then(response => {
        alert('Pase de lista registrado exitosamente');
      })
      .catch(error => {
        console.error('Hubo un error al registrar el pase de lista:', error);
      });
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h3 className="text-center">PASE DE LISTA</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-12">
                <div className="input-group input-group-sm">
                  <span className="input-group-text">Grupo</span>
                  <select className="form-control" value={grupoSeleccionado} onChange={handleGrupoChange}>
                    <option value="">Seleccione un grupo</option>
                    {grupos.map(grupo => (
                      <option key={grupo.id} value={grupo.id}>
                        {grupo.nombre}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-group input-group-sm">
                  <span className="input-group-text">No. Control</span>
                  <input type="text" aria-label="nocontrol" className="form-control" value={nocontrol} onChange={(e) => setNoControl(e.target.value)} required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group input-group-sm">
                  <span className="input-group-text">Fecha</span>
                  <input type="text" aria-label="fecha" className="form-control" readOnly value={fecha} id="fecha" name="fecha" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group input-group-sm">
                  <span className="input-group-text">Hora</span>
                  <input type="text" aria-label="hora" className="form-control" readOnly value={hora} id="hora" name="hora" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="input-group input-group-sm">
                  <span className="input-group-text">Materia</span>
                  <input type="text" aria-label="nombremateria" className="form-control" readOnly value={nombremateria} id="nombremateria" name="nombremateria" />
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group input-group-sm">
                  <span className="input-group-text">Id</span>
                  <input type="text" aria-label="idmateria" className="form-control" readOnly value={idmateria} id="idmateria" name="idmateria" />
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group input-group-sm">
                  <span className="input-group-text">Gpo</span>
                  <input type="text" aria-label="idgrupo" className="form-control" readOnly value={idgrupo} id="idgrupo" name="idgrupo" />
                </div>
              </div>
              <div className="col-md-9">
                <div className="input-group input-group-sm">
                  <span className="input-group-text">Profesor</span>
                  <input type="text" aria-label="nombreprofesor" className="form-control" readOnly value={nombreprofesor} id="nombreprofesor" name="nombreprofesor" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group input-group-sm">
                  <span className="input-group-text">Id</span>
                  <input type="text" aria-label="idprofesor" className="form-control" readOnly value={idprofesor} id="idprofesor" name="idprofesor" />
                </div>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <a href="/" className="btn btn-dark btn-lg">Regresar</a>
                <button type="submit" className="btn btn-success btn-sm align-self-end">Pase de Lista</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroAsistencia;
