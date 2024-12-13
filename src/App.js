import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegistroUsuario from './components/RegistroUsuario';
import Login from './components/Login';
import ListadoUsuarios from './components/ListadoUsuarios';
import RegistroMateria from './components/RegistroMateria';
import ListadoMaterias from './components/ListadoMaterias';
import Navbar from './components/Navbar';
import ListadoGrupos from './components/ListadoGrupos';
import RegistroGrupo from './components/RegistroGrupo';
import ListadoAsistencias from './components/ListadoAsistencias';
import RegistroAsistencia from './components/RegistroAsistencia';
import Acercade from './components/acercade';



function App() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, []);

  const handleLogout = () => {
    setAuth(null);
    localStorage.removeItem('auth');
  };

  const handleAuth = (authData) => {
    setAuth(authData);
    localStorage.setItem('auth', JSON.stringify(authData));
  };

  const members = [
    { name: 'Castelan Ramirez Fatima Del Rocio', photo: '' },
    { name: 'Mariel Varela Jatziri', photo: '' },
,
  ];

  return (
    <Router>
      <div className="App">
        {!auth ? (
          <Login setAuth={handleAuth} />
        ) : (
          <>
            <Navbar handleLogout={handleLogout} />
            <div className="container mt-4">
              <Routes>
                <Route path="/usuarios" element={<ListadoUsuarios />} />
                <Route path="/materias" element={<ListadoMaterias />} />
                <Route path="/registro-usuario" element={<RegistroUsuario />} />
                <Route path="/registro-materia" element={<RegistroMateria />} />
                <Route path="/grupos" element={<ListadoGrupos />} />
                <Route path="/registro-grupo" element={<RegistroGrupo />} />
                <Route path="/asistencias" element={<ListadoAsistencias />} />
                <Route path="/registro-asistencia" element={<RegistroAsistencia />} />
                <Route path="/acercade" element={<Acercade members={members} />} />
                <Route path="/" element={<Navigate to="/usuarios" />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;