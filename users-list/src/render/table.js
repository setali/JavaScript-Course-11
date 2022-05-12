import renderTableHead from './table-head'
import '../assets/css/table.css'

export default function renderTable () {
  const table = document.createElement('table')
  // table.setAttribute('width', '100%')
  table.setAttribute('border', '1')

  table.appendChild(renderTableHead())

  return table
}
