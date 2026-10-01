import { useState } from 'react'
import { datos } from '../datos.js'

export default function Inicio() {
  const [sinFoto, setSinFoto] = useState(false)

  return (
    <section className="tarjeta perfil">
      {sinFoto ? (
        <div className="foto vacia">Foto 2x2</div>
      ) : (
        <img className="foto" src={datos.foto} alt="Foto 2x2" onError={() => setSinFoto(true)} />
      )}
      <h2>{datos.nombre} {datos.apellido}</h2>
      <p><strong>Nombre:</strong> {datos.nombre}</p>
      <p><strong>Apellido:</strong> {datos.apellido}</p>
      <p><strong>Correo:</strong> <a href={`mailto:${datos.correo}`}>{datos.correo}</a></p>
    </section>
  )
}
