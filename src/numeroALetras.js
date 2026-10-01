const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',
  'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve',
  'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve']

const decenas = ['', '', '', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa']

const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos',
  'seiscientos', 'setecientos', 'ochocientos', 'novecientos']

function menorDeCien(n) {
  if (n < 30) return unidades[n]
  const d = Math.floor(n / 10)
  const u = n % 10
  return u === 0 ? decenas[d] : `${decenas[d]} y ${unidades[u]}`
}

export function numeroALetras(n) {
  if (n === 1000) return 'mil'
  if (n === 100) return 'cien'
  const c = Math.floor(n / 100)
  return [centenas[c], menorDeCien(n % 100)].filter(Boolean).join(' ')
}
