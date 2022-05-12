class Person {
  constructor (name, family) {
    this.name = name
    this.family = family
  }

  static country = 'Iran'

  static hi () {
    console.log(this)
    console.log('Hi')
  }

  hello () {
    console.log(this)
  }
}

const ali = new Person('Ali', 'Mousavi')

console.log(ali.country)
console.log(Person.country)

console.log(Person.family)

Person.hi()

ali.hello()

// ali.hi()

// const person = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 32,
//   [Symbol.toPrimitive] (hint) {
//     console.log(hint)
//     if (hint === 'string') {
//       return `${this.name} ${this.family}`
//     }
//     if (hint === 'number') {
//       return this.age
//     }
//   }
// }

// console.log(`My Name is ${person}. and I have ${+person} years old`)

// const sym1 = Symbol.for('ali')
// const sym2 = Symbol.for('ali')

// console.log(sym1 === sym2)

// const sym1 = Symbol()
// const sym2 = Symbol()

// console.log(sym1 === sym2)
// console.log(sym1 === sym1)

// const addressSymbol = Symbol('address')

// const person = {
//   name: 'Ali',
//   family: 'Mousavi',
//   [addressSymbol]: 'Shiraz'
// }

// for (const key in person) {
//   console.log(key, person[key])
// }

// console.log(JSON.stringify(person))

// console.log(person.addressSymbol) // wrong
// console.log(person[addressSymbol]) // ok

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => console.log(data))
