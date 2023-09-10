const LocationInfo = ({location}) => {

  return (
    <article className="informacion">
        <h2>{location?.name}</h2>
        <ul className="informacion__caja">
            <li className="informacion__caja__parte"><span>Type:</span><span className="dato">{location?.type}</span></li>
            <li className="informacion__caja__parte"><span>Dimension:</span><span className="dato">{location?.dimension || 'unknown'}</span></li>
            <li className="informacion__caja__parte"><span>Population:</span><span className="dato">{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationInfo