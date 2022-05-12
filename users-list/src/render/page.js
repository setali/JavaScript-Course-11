import renderHead from './head'
import renderTable from './table'
import User from '../entity/user'
import '../assets/scss/page.scss'

export default function renderPage (users) {
  const root = document.getElementById('root')

  root.appendChild(renderHead())

  const table = renderTable()

  users.forEach(u => {
    const user = new User(u)
    table.appendChild(user.render())
  })

  root.appendChild(table)
}
