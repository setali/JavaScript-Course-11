function distance (a, b) {
  const dx = a.x - b.x
  const dy = a.y - b.y
  return Math.hypot(dx, dy)
}

class Point {
  static world = '2D'
  constructor (x, y) {
    this.x = x
    this.y = y
  }
}

Point.distance = distance

const p1 = new Point(5, 5)
const p2 = new Point(10, 10)
console.log(Point.world)
console.log(Point.distance(p1, p2))

// function Person (name, family) {
//   this.name = name
//   this.family = family
//   this.getFulName = () => `${this.name} ${this.family}`
// }

// class Person {
//   city = 'Tehran'
//   country = 'Iran'

//   constructor (name, family) {
//     this.name = name
//     this.family = family
//   }

//   get getFulName () {
//     return `${this.name} ${this.family}`
//   }

//   getFullName = () => `${this.name} ${this.family}`
// }

// const ali = new Person('Ali', 'Mousavi')

// console.log(ali)
// console.log(ali.getFulName)
// console.log(ali.getFullName())

// console.log(ali instanceof Person)

// const delay = time =>
//   new Promise(resolve => setTimeout(() => resolve(), time * 1000))

// async function func () {
//   for (let i = 0; i < 5; i++) {
//     console.log(i)
//     await delay(1)
//   }
// }

// func()

// async function func () {
//   console.log(1)
//   await delay(2)
//   console.log(2)
//   await delay(3)
//   console.log(3)
// }

// func()
// function delay (time, number) {
//   return new Promise((resolve, reject) => {
//     if (time) {
//       setTimeout(() => resolve(number ** 2), time * 1000)
//     } else {
//       reject('Error')
//     }
//   })
// }

// async function func () {
//   console.log(1)

//   const result = await delay(2, 5)

//   console.log(result)
//   console.log(2)

//   return 'ali'
// }

// const f = func().then(data => console.log(data))

// console.log(f)

// async function fAsync () {
//   return 100
// }

// fAsync().then(result => console.log(result))

// function request (url, method = 'GET') {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()

//     xhr.open(method, url)
//     xhr.send()

//     xhr.onload = function () {
//       if (xhr.status >= 400) {
//         reject('There is an error to data fetching')
//       } else {
//         function json () {
//           return new Promise((resolve, reject) => {
//             try {
//               const response = JSON.parse(xhr.response)
//               resolve(response)
//             } catch (err) {
//               reject('Data is not a JSON')
//             }
//           })
//         }

//         resolve({
//           status: xhr.status,
//           text: xhr.responseText,
//           json
//         })
//       }
//     }
//   })
// }

// async function func () {
//   console.log(1)
//   const response = await request('https://jsonplaceholder.typicode.com/users/2')
//   console.log(2)
//   const data = await response.json()

//   console.log(data)
//   console.log(3)
// }

// func()

// fetch('https://jsonplaceholder.typicode.com/')
//   .then(response => response.text())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// request('https://jsonplaceholder.typicode.com/')
//   .then(response => response.text)
//   .catch(err => console.log(err))

// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// request('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// request('https://jsonplaceholder.typicode.com/users/2')
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// function delay (time, number) {
//   return new Promise((resolve, reject) => {
//     if (Number(time)) {
//       const result = number ** 2
//       setTimeout(() => resolve({ time, result }), time * 1000)
//     } else {
//       reject('time is not correct')
//     }
//   })
// }

// const f = delay(2, 5)
//   .then(result => {
//     console.log(`After ${result.time} seconds`)
//     return result.result
//   })
//   .then(result => console.log(result))
//   .catch(err => console.log(err))

// console.log(f)
// // const prom = new Promise((resolve, reject) => {
//   resolve()
//   reject()
// })

// console.log(1)

// setTimeout(() => console.log('TimeOut'), 0)

// prom
//   .then(() => console.log('Prom resolved'))
//   .catch(() => console.log('Prom rejected'))

// console.log(2)

// const obj = {
//   name: 'Ali'
// }

// console.log(`Welcome ${obj}`)

// let value = 10

// function changeValue (valueArg) {
//   valueArg = 20

//   return valueArg
// }

// let newValue = changeValue(value)

// console.log(newValue)

// console.log(value)

// const obj = {
//   name: 'Ali'
// }

// function changeObj (objArg) {
//   objArg.name = 'Qoli'

//   return objArg
// }

// const newObj = changeObj(obj)

// console.log(newObj)

// console.log(obj)

// console.log(obj === newObj)

// const set = new Set([2, 5])

// console.log(typeof set)

// function changeSet (setArg) {
//   setArg.add(6)

//   return setArg
// }

// const newSet = changeSet(set)

// console.log(set)

// console.log(newSet)

// console.log(set === newSet)
