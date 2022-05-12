import logo from '../assets/images/logo.png'

export default function renderHead () {
  const div = document.createElement('div')

  const img = document.createElement('img')
  img.setAttribute('src', logo)

  const h2 = document.createElement('h2')
  h2.textContent = 'Users list'

  div.appendChild(img)
  div.appendChild(h2)
  return div
}
