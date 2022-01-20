import '../main.css';
function Personaje({ personaje }) {
  const { gender, image, origin, name, location, species, status } = personaje;

  return (
    <section className="col-md-4 mb-3">
      <div className="card border-dark">
        <img className="rounded-top" src={image} alt={`imagen-${name}`} />
        <div className="card-body bg-dark">
          <h2 className="fw-bold mb-4">
            <span
              className={`icon__success ${
                status === 'Alive' ? 'bg-success' : 'bg-danger'
              }`}
            ></span>
            {name} {}
            <span className="text-info">{species}</span>
          </h2>

          <div className="mb-2">
            <p className="fw-bold m-0 text-muted">Gender:</p>
            <span>{gender}</span>
          </div>

          <div className="mb-2">
            <p className="fw-bold m-0 text-muted">Last known location:</p>
            <span>{location.name}</span>
          </div>

          <div className="mb-2">
            <p className="fw-bold m-0 text-muted">Origin</p>
            <span>{origin.name}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Personaje;
