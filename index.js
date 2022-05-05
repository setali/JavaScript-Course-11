class MyClass {
  static [Symbol.hasInstance] (instance) {
    if (instance === 'ali' || Array.isArray(instance)) {
      return true
    } else {
      return false
    }
  }
}

console.log('ali' instanceof MyClass)
console.log([] instanceof MyClass)
console.log({} instanceof MyClass)
console.log(42 instanceof MyClass)

const f = new MyClass()

console.log(f instanceof MyClass)

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
