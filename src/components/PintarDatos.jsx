import Personaje from './Personaje';
import { useFetch } from '../hooks/useFetch';

const PintarDatos = ({ personaje }) => {
  const [personajes] = useFetch(personaje);
  return (
    <div className="row">
      {personajes.map((item) => (
        <Personaje key={item.id} personaje={item} />
      ))}
    </div>
  );
};

export default PintarDatos;
