import { COLUMNS } from '../tools/constants'

export default function renderTableHead () {
  const tr = document.createElement('tr')

  COLUMNS.forEach(column => {
    const th = document.createElement('th')
    th.textContent = column
    tr.appendChild(th)
  })

  return tr
}
