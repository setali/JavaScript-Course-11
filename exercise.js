// camelCaseNaming
// PascalCaseNaming
// snake_case_naming
// kebab-case-naming
// UPPER_CASE_NAMING

//////// 11

function callbackOperation () {
  var operator = arguments[0]

  var numbers = []

  for (var i = 1; i < arguments.length; i++) {
    numbers[i - 1] = arguments[i]
  }

  return operator.apply(null, numbers)
}

console.log(callbackOperation(sum, 2, 3, 8))

//////// 10

function operation () {
  var operator = arguments[0]

  var numbers = []

  for (var i = 1; i < arguments.length; i++) {
    numbers[i - 1] = arguments[i]
  }

  console.log(numbers)

  switch (operator) {
    case 'sum':
      return sum.apply({}, numbers)

    case 'sub':
      return subtraction.apply({}, numbers)

    case 'mul':
      return mul.apply({}, numbers)

    case 'div':
      return division.apply({}, numbers)

    default:
      console.error('Operator not defined')
  }
}

// console.log(operation('sum', 2, 3, 8))

///////// 9
function sum () {
  var result = 0

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }

  return result
}

function subtraction () {
  var result = arguments[0]

  for (var i = 1; i < arguments.length; i++) {
    result -= arguments[i]
  }

  return result
}

function mul () {
  var result = 1

  for (var i = 0; i < arguments.length; i++) {
    result *= arguments[i]
  }

  return result
}

function division () {
  var result = arguments[0]

  for (var i = 1; i < arguments.length; i++) {
    result /= arguments[i]
  }

  return result
}

// console.log(division(63, 1, 9))

//////// 4

var ali = {
  firstName: 'Ali',
  lastName: 'Mousavi',
  age: 32,
  family: {
    father: 'Mohammad',
    mother: 'Hajar'
  },
  friends: ['Ali', 'Eli', 'Qoli', 'Fati']
}

///////// 8

function getFullName (obj) {
  return obj.firstName + ' ' + obj.lastName
}

// console.log(getFullName(ali))

///////// 7

function printFriends (obj) {
  for (var value of obj.friends) {
    console.log(value)
  }
}

// printFriends(ali)

// ~ ! @ # $ % ^ & * () - _ + = | / \ < > . [] {} " ' : ; ` ,

//////// 5

// 0101011110001101 000
// 0101011110001101 100
// 0101011110001101 110

// 00000000000000000000

////// 1

var firstName = 'Ali',
  lastName = 'Mousavi',
  age = 32,
  city = 'Shiraz'

// console.log(
//   'My name is ' +
//     firstName +
//     ' ' +
//     lastName +
//     '\n\t=> I have ' +
//     age +
//     " years old.\n\t=> I'm living in " +
//     city
// )
