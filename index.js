function factorial (n) {
  return n === 1 ? 1 : n * factorial(n - 1)
}

console.log(factorial(5))

// function factorial (n) {
//   var result = 1

//   for (var i = n; i > 1; i--) {
//     result *= i
//   }

//   return result
// }

// console.log(factorial(5))

// 5! => 5 * 4 * 3 * 2 * 1
// 4! => 4 * 3 * 2 * 1
// 3! => 3 * 2 * 1
// 2! => 2 * 1
// 1! => 1

// 5! => 5 * 4!
// 4! => 4 * 3!
// 3! => 3 * 2!
// 2! => 2 * 1!
// 1! => 1

// function sum (a, b) {
//   return a + b
// }

// function mul (a, b) {
//   return a * b
// }

// function noop () {}

// // const noop = () => {}

// function operate (a, b, cb = noop) {
//   console.log(a, b, cb)
//   return cb(a, b)
// }

// console.log(operate(4, 5))

// console.log(operate(2, 5, sum))

// console.log(operate(3, 5, mul))
// console.log(
//   operate(2, 5, function (a, b) {
//     return a ** b
//   })
// )

// console.log(sum(1, 2))
// console.log(mul(2, 5))

// function sum (a = 0, b = 0, c = 0, d = 0, e = 10) {
//   // function sum () {
//   console.log(arguments)

//   console.log(a, e)

//   var result = 0

//   //   for (var i = 0; i < arguments.length; i++) {
//   //     result += arguments[i]
//   //   }

//   for (var value of arguments) {
//     result += value
//   }

//   return result

//   //   if (c === undefined) {
//   //     c = 0
//   //   }

//   //   c = c === undefined ? 0 : c

//   //   c = c || 0
//   //   c = c ?? 0
//   //   d = d ?? 0

//   //   return a + b + c + d + e
// }

// console.log(sum(2, 5, 9))

// console.log(sum(4, 6))

// console.log(sum(4, 6, 3, 8))

// var result = NaN ?? 12

// console.log(result)

// function sum (a, b) {
//   console.log('Call sum')
//   var result = a + b

//   return result
//   console.log('Ali')
// }

// var value = sum(20, 3)

// console.log(value)

// var person = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 32,
//   gender: true
// }

// var myKey

// for (var key in person) {
//   console.log(key, person[key])
//   if (person[key] === 'Mousavi') {
//     myKey = key
//   }
// }

// console.log("=>", myKey)

// console.log('fullname' in person)

// for (var property of person) { // Wrong
//   console.log(property)
// }

// for (var char of 'Salam') {
//   console.log(char)
// }

// var friends = ['Ali', 'Eli', 'Qoli', 'Fati']

// for (var friend of friends) {
//   console.log(friend)
// }

// for (var i = 0; i < friends.length; i++) {
//   console.log(friends[i])
// }

// var arr = [6, 2, 9, 3, 1, 8, 5]

// var result = 0

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2) {
//     continue
//   }

//   console.log(arr[i])

//   result += arr[i]
// }

// console.log('Result: ', result)

// var arr = [5, 10, 3, 11, 6, 8]

// var status = false

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i])
//   if (arr[i] === 11) {
//     status = true
//     break
//   }
// }

// console.log(status)

// for (var i = 0; i < 10; i++) {
//   if (i % 2 === 1) {
//     console.log(i)
//     continue
//   }

//   // ...

//   console.log('Salam', i ** 2)
// }

// var i = 0

// do {
//   console.log('Hello')
//   i++
// } while (i < 5)

// var i = 0

// while (i < 5) {
//   console.log('Hello')
//   i++
// }

// var str = 'Salam'

// for (var i = 0; i < str.length; i++) {
//   console.log(i, str[i])
// }

// var friends = ['Ali', 'Eli', 'Qoli', 'Fati']

// for (var i = 0; i < friends.length; i++) {
//   console.log(i, friends[i])
// }

// for (var i = 0; i < 5; i++) {
//   console.log('Hello')
// }
