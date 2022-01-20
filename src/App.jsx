import React, { useState } from 'react';
import Formulario from './components/Formulario';
import PintarDatos from './components/PintarDatos';

const App = () => {
  const [personaje, setPersonaje] = useState('');

  return (
    <div className="container my-4">
      <h1 className="fw-bold text-center">Rick and Morty</h1>
      <Formulario setPersonaje={setPersonaje} />
      <PintarDatos personaje={personaje} />
    </div>
  );
};

export default App;
