import { useState } from 'react'

const filas = Array.from({ length: 13 }, (_, i) => i + 1)

export default function Tabla() {
  const [valor, setValor] = useState('')
  const n = Number(valor)

  return (
    <section className="tarjeta">
      <h2>Tabla de multiplicar</h2>
      <input type="number" step="any" placeholder="Ingresa un número" value={valor} onChange={(e) => setValor(e.target.value)} />
      {valor !== '' && !Number.isNaN(n) && (
        <table>
          <tbody>
            {filas.map((i) => (
              <tr key={i}>
                <td>{n} × {i}</td>
                <td>=</td>
                <td><strong>{n * i}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}
