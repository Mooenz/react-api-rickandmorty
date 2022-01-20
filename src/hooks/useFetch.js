import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export const useFetch = (personaje) => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    consumirApi(personaje);
  }, [personaje]);

  const consumirApi = async (nombrePersonaje) => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${nombrePersonaje}&status=alive`
      );

      if (!res.ok) {
        return Swal.fire({
          title: 'Error',
          text: 'El personaje no existe',
          icon: 'error',
        });
      }

      const datos = await res.json();
      setPersonajes(datos.results);
    } catch (error) {
      console.log(error);
    }
  };

  return [personajes];
};
