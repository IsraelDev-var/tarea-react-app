import { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import Sumadora from './pages/Sumadora.jsx'
import Traductor from './pages/Traductor.jsx'
import Tabla from './pages/Tabla.jsx'
import Experiencia from './pages/Experiencia.jsx'

const opciones = [
  { ruta: '/', texto: 'Inicio' },
  { ruta: '/sumadora', texto: 'Sumadora' },
  { ruta: '/traductor', texto: 'Números a letras' },
  { ruta: '/tabla', texto: 'Tabla de multiplicar' },
  { ruta: '/experiencia', texto: 'Experiencia personal' },
]

export default function App() {
  const [abierto, setAbierto] = useState(false)

  return (
    <div className="app">
      <header className="barra">
        <button className="hamburguesa" onClick={() => setAbierto(!abierto)} aria-label="Menú">☰</button>
        <h1>Tarea React</h1>
      </header>
      <nav className={abierto ? 'menu abierto' : 'menu'}>
        {opciones.map((o) => (
          <NavLink key={o.ruta} to={o.ruta} end onClick={() => setAbierto(false)}>
            {o.texto}
          </NavLink>
        ))}
      </nav>
      {abierto && <div className="fondo" onClick={() => setAbierto(false)} />}
      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sumadora" element={<Sumadora />} />
          <Route path="/traductor" element={<Traductor />} />
          <Route path="/tabla" element={<Tabla />} />
          <Route path="/experiencia" element={<Experiencia />} />
        </Routes>
      </main>
    </div>
  )
}
