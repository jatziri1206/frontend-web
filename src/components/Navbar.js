import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ handleLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Inicio</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/usuarios">Usuarios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/materias">Materias</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/grupos">Grupos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/asistencias">Asistencias</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/registro-usuario">Registrar Usuario</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/registro-materia">Registrar Materia</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/registro-grupo">Registrar Grupo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/registro-asistencia">Registrar Asistencia</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/acercade">Acerca de</Link>
          </li>
        </ul>
        <button className="btn btn-outline-danger ml-auto" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
