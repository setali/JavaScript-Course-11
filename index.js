


// var persons = [
//   { name: 'Ali', family: 'Mousavi', gender: 'man', age: 32 },
//   { name: 'Mohsen', family: 'Safizadeh', gender: 'man', age: 20 },
//   { name: 'Nima', family: 'Fakhr', gender: 'man', age: 23 },
//   { name: 'Nima', family: 'Kazemi', gender: 'man', age: 17 },
//   { name: 'Shahrzad', family: 'Nikbakhtian', gender: 'woman', age: 31 },
//   { name: 'Sina', family: 'Khalaj', gender: 'man', age: 23 },
//   { name: 'Tahmineh', family: 'Rivandi', gender: 'woman', age: 29 }
// ]

// persons.sort(function (a, b) {
//   return b.age - a.age
// })

// console.log(persons)

// var arr = [2, 5, 3, 7, 1, 22, 11]

// console.log(
//   arr.sort(function (a, b) {
//     return a - b
//   })
// )

// var ages = persons.reduce(function (acc, el) {
//   return acc + el.age
// }, 0)

// console.log(ages)

// var avg = ages / persons.length

// console.log(avg)

// var arr = [2, 5, 8, 3, 9, 10]

// var result = arr.reduce(function (acc, el) {
//   console.log(acc, el)
//   return acc + el
// })

// var result = 0

// arr.forEach(function (el) {
//   result += el
// })

// console.log(result)

// var newArr = persons.map(function (el) {
//   console.log(el)
//   return el.name + ' ' + el.family
// })

// console.log(newArr)

// for (var el of persons) {
//   console.log(el.family)
// }

// persons.forEach(function (el) {
//   console.log(el.family)
// })

// var thereIsWoman = persons.some(function (el) {
//   console.log(el)
//   return el.gender === 'woman'
// })

// console.log(thereIsWoman)

// var nima = persons.find(function (el) {
//   return el.name === 'Nima'
// })

// var younger = persons.find(function (el) {
//   return el.age < 5
// })

// console.log(younger)

// var arr = [3, 5, 8, 0, 9]

// const result = arr.find(function (el) {
//   console.log(el)
//   return el % 2 === 0
// })

// console.log(result)

// var women = persons.filter(function (el) {
//   return el.gender === 'woman'
// })

// var men = persons.filter(function (el) {
//   return el.gender === 'man'
// })

// var youngs = persons.filter(function (el) {
//   return el.age < 25
// })

// var olds = persons.filter(function (el) {
//   return el.age > 25
// })

// console.log(olds)

// var arr = [4, 8, 10, 21, 51, 24, 22]

// var evens = arr.filter(function (el) {
//   return !(el % 2)
// })

// var odds = arr.filter(function (el) {
//   return el % 2
// })

// console.log(evens)
// console.log(odds)

// var result = arr.every(function (el, index, arr) {
//   return !(el % 2)
// })

// console.log(result)
// var newArr = Array.from({ length: 10 }, function (el, index) {
//   console.log(el, index)
//   return index + 1
// })

// console.log(newArr)

// function * gen () {
//   yield 1
//   yield 2
//   yield 3
// }

// var it = gen()

// // console.log(it.next())
// // console.log(it.next())
// // console.log(it.next())
// // console.log(it.next())

// for (var v of it) {
//   console.log(v)
// }

// var arr = [10]

// var arr2 = new Array(10)

// console.log(arr)
// console.log(arr2)

// ;(function () {
//   console.log('salam')
// })()
