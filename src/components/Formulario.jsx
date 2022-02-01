import { useFormulario } from '../hooks/useFormulario';
import Swal from 'sweetalert2';

const Formulario = ({ setPersonaje }) => {
  const [inputs, handleChange, reset] = useFormulario({
    nombre: '',
  });

  const { nombre } = inputs;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nombre.trim()) {
      return Swal.fire({
        title: 'Error',
        text: 'Campo vació',
        icon: 'error',
      });
    }

    setPersonaje(nombre.trim().toLowerCase());
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex align-items-center gap-2 my-4"
    >
      <input
        type="text"
        name="nombre"
        placeholder="Ingrese personaje"
        className="form-control"
        value={nombre}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-info fw-bold">
        Buscar
      </button>
    </form>
  );
};

export default Formulario;
