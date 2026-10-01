import { datos } from '../datos.js'

export default function Experiencia() {
  return (
    <section className="tarjeta">
      <h2>Experiencia personal</h2>
      <p>En este video explico mi experiencia al realizar esta tarea.</p>
      <div className="video">
        <iframe
          src={`https://www.youtube.com/embed/${datos.videoId}`}
          title="Experiencia personal"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  )
}
