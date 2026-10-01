import { useState } from 'react'
import { numeroALetras } from '../numeroALetras.js'

export default function Traductor() {
  const [valor, setValor] = useState('')
  const n = Number(valor)
  const valido = valor !== '' && Number.isInteger(n) && n >= 1 && n <= 1000

  return (
    <section className="tarjeta">
      <h2>Traductor de números a letras</h2>
      <input type="number" min="1" max="1000" placeholder="Número del 1 al 1000" value={valor} onChange={(e) => setValor(e.target.value)} />
      {valor !== '' && (
        valido
          ? <p className="resultado">{n}: <strong>{numeroALetras(n)}</strong></p>
          : <p className="error">Ingresa un número entero del 1 al 1000.</p>
      )}
    </section>
  )
}
