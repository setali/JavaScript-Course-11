function renderPage (users) {
  const root = document.getElementById('root')

  root.appendChild(renderHead())

  const table = renderTable()

  users.forEach(u => {
    const user = new User(u)
    table.appendChild(user.render())
  })

  root.appendChild(table)
}
