import { COLUMNS } from '../tools/constants'

class User {
  constructor ({ id, name, username, email, address: _address }) {
    this.id = id
    this.name = name
    this.username = username
    this.email = email
    this._address = _address

    // this.remove = this.remove.bind(this)
  }

  get address () {
    return `${this._address.city} ${this._address.street}`
  }

  // remove = () => document.getElementById(`tr-${this.id}`).remove()

  remove () {
    document.getElementById(`tr-${this.id}`).remove()
  }

  getRemoveAction () {
    const td = document.createElement('td')
    td.textContent = 'x'
    td.style.color = 'red'
    td.style.cursor = 'pointer'
    td.style.padding = '5px'

    // td.addEventListener('click', (event) => {
    //     event.target.parentElement.remove()
    // }

    // td.addEventListener('click', this.remove.bind(this))
    // td.addEventListener('click', this.remove) // with arrow function
    td.addEventListener('click', () => this.remove())

    return td
  }

  render () {
    const tr = document.createElement('tr')
    tr.setAttribute('id', `tr-${this.id}`)

    // console.log(this)

    COLUMNS.forEach(column => {
      const td = document.createElement('td')
      td.textContent = this[column]

      tr.appendChild(td)
    })

    tr.appendChild(this.getRemoveAction())

    return tr
  }
}

export default User
