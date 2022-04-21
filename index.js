const person = {
  firstname: 'Ali',
  lastname: 'Mousavi',
  // family: {
  // father: {
  //   firstname: 'Mohammad'
  // }
  // },
  // getFullName: function () {
  //   console.log(`${this.firstname} ${this.lastname}`)
  // },
  gender: false
}

// console.log(
//   person.family && person.family.father && person.family.father.firstname
// )
console.log(person.family?.father?.firstname)

person.getFullName?.()

console.log(person.gender || 'Man')
console.log(person.gender ?? 'Man')

// const map = new Map()

// map.set('name', 'Ali')
// map.set('family', 'Mousavi')
// map.set(NaN, 12)

// for (const [key, value] of map) {
//   console.log(key, value)
// }

// const arr = [2, 6, 3, 2, 4, 6, 3, 2, 9, 8]

// const set = new Set(arr)

// console.log(set)

// const newArr = [...set]

// console.log(newArr)

// const set = new Set([4, 5])

// set.add(6)

// const values = set.values()

// console.log(set)

// console.log(values)

// for (const el of values) {
//   console.log(el)
// }

// const arr = [2, 4, 6, 8]

// const [a, b = 10, ...other] = arr

// console.log(a, b, other)

// const person = { name: 'Ali', family: 'Mousavi', age: 32, gender: false }

// // const myName = person.name
// // const family = person.family

// const { name: firstname, family, gender: sex = true, ...rest } = person

// console.log(firstname, family, sex)

// console.log(rest)

// function func (a, b, ...args) {
//   console.log(a, b, args)
// }

// func(2, 5, 4, 9, 6, 3)

// const sum = (...args) => {
//   console.log(args)
//   return args.reduce((acc, el) => acc + el)
// }

// console.log(sum(1, 5, 3, 9))

// console.log([...'salam'])

// const person = { name: 'Ali', family: 'Mousavi' }

// const arr = [...person]

// const arr = ['Ali', 'Eli', 'Qoli', 'Fati']

// const obj = { ...arr }

// console.log(obj)

// const person = {
//   name: 'Ali',
//   family: 'Mousavi',
//   company: {
//     name: 'Digikala'
//   }
// }

// // const person2 = Object.assign({}, person)

// const person2 = { name: 'Eli', ...person, name: 'Qoli' }

// person.company.name = 'Snapp'

// console.log(person2)

// const arr = [1, 2, 3, 4]

// const newArr = [9, 8, 6, ...arr, 2, 5]

// console.log(newArr)

// const numbers = [6, 3, 8, 12, 92, 36, 1]

// // const max = Math.max.apply({}, numbers)
// const max = Math.max(...numbers)

// console.log(max)

// function func () {
//   const b = 40

//   // const that = this
//   console.log(this)

//   return {
//     a: 20,
//     noraml: function () {
//       // console.log(this === that)
//       console.log(this)
//     },
//     arrow: () => {
//       // console.log(this === that)
//       console.log(this)
//     }
//   }
// }

// const f = func.call({ name: 'Qoli' })

// const obj = {
//   name: 'Ali',
//   newNormal: f.noraml,
//   newArrow: f.arrow
// }

// obj.newNormal()
// obj.newArrow()

// const person = {
//   name: 'Ali',
//   family: 'Mousavi'
// }

// // const f = func.call(person)
// const f = new func()

// f.noraml()

// f.arrow()

// const pow2 = a => a ** 2

// console.log(pow2(5))

// const sum = (a, b) => {
//   // console.log(arguments) // Error
//   return a + b
// }

// // const a = new sum(1, 6) // Error

// console.log(sum(1, 6))

// const str = `Welcome ${(function getFullname () {
//   return 'Ali Mousavi'
// })()}`

// const name = 'Ali',
//   family = 'Mousavi'

// const str = 'Welcome ' + name + ' ' + family
// const str = `Welcome ${name} ${family}`

// console.log(str)

// console.log(`Hello`) // backtick

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, 1000)
// }

// const a = 22

// console.log(a)

// a = 36 //Error

// console.log(a)

// A22EFB
// const a = { b: 22 }

// console.log(a)

// // a = { b: 36 } // Error
// a.b = 36

// console.log(a)

// function func () {
//   let a = 22 // Error
//   console.log(a)

//   {
//     var a = 35
//     console.log(a)
//   }

//   console.log(a)
// }

// func()

// console.log(a)

// if (true) {
//   let a = 22

//   console.log(a)

//   {
//     // let a = 36
//     console.log(a)
//   }
// }

// a = 35

// console.log(a)

// function func () {
//   var a

//   console.log(a)

//   var a = 22

//   console.log(a)

//   var a = 35

//   console.log(a)
// }

// func()
