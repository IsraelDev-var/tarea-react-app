import { useState } from 'react'

export default function Sumadora() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [resultado, setResultado] = useState(null)

  const sumar = (e) => {
    e.preventDefault()
    if (a === '' || b === '') return
    setResultado(Number(a) + Number(b))
  }

  return (
    <section className="tarjeta">
      <h2>Sumadora</h2>
      <form onSubmit={sumar}>
        <input type="number" step="any" placeholder="Primer número" value={a} onChange={(e) => setA(e.target.value)} />
        <input type="number" step="any" placeholder="Segundo número" value={b} onChange={(e) => setB(e.target.value)} />
        <button type="submit">Sumar</button>
      </form>
      {resultado !== null && <p className="resultado">Resultado: <strong>{resultado}</strong></p>}
    </section>
  )
}
