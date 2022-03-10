// var obj = {
//   name: 'Ali'
// }

// obj.family = 'Mousavi'

// console.log(Object.entries(obj))

// Object.defineProperty(obj, 'age', {
//   //   value: 32,
//   //   writable: false,
//   //   enumerable: false,
//   //   configurable: false,
//   get: function () {
//     return this._age
//   },
//   set: function (value) {
//     console.log(value)
//     this._age = +value
//   }
// })

// obj.age = '35'

// console.log(obj)

// console.log(obj.age)

// Object.defineProperty(obj, 'fullName', {
//   get: function () {
//     return this.name + ' ' + this.family
//   },
//   set: function (value) {
//     var arr = value.split(' ')
//     this.name = arr[0]
//     this.family = arr[1]
//   }
// })

// console.log(obj.name)
// console.log(obj.family)

// console.log(obj.fullName)

// obj.fullName = 'Hasan Hasani'

// console.log(obj.name)
// console.log(obj.family)

// console.log(obj)

// delete obj.age

// console.log(obj)

// for (var key in obj) {
//   console.log(key)
// }

// console.log(JSON.stringify(obj))

// console.log(obj)

// obj.age = 30

// console.log(obj)

// var newObj = Object.create(null)

// console.log(newObj)

// var obj = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 32,
//   gender: true,
//   education: undefined,
//   birthday: new Date()
// }

// console.log(obj)

// var strObj = JSON.stringify(obj)

// console.log(strObj)

// var newObj = JSON.parse(strObj)

// console.log(newObj)

// console.log(newObj === obj)

// var str = '{"name":"Ali", "family": {"father":"Mousavi"}, age: 32}'

// // AC124F
// var a = {
//   b: 5,
//   // CDF12A
//   c: {
//     d: 10
//   }
// }

// // BDF11C
// // var t = Object.assign({}, a)
// var t = JSON.parse(JSON.stringify(a))

// t.b = 50
// t.c.d = 100

// console.log('a', a)
// console.log('t', t)

// console.log(t.c === a.c)

// var person = {
//   name: 'Ali',
//   family: 'Mousavi'
// }

// var person3 = {
//   family: 'Alavi',
//   age: 32
// }

// // var person2 = {}
// // Object.assign(person2, person, person3)

// var person2 = Object.assign({}, person, person3)

// person2.name = 'Hasan'

// console.log(person)
// console.log(person2)

// var obj = {}

// function Func () {}

// var obj = new Func()

// class MyClass {}

// var obj = new MyClass()

// console.log(obj)

// // var numbers = [12, 3, 5, 19, 4, 36, 2]

// // var max = Math.max.apply({}, numbers)

// // console.log(max)

// function welcome (greeting) {
//   console.log(this)
//   console.log(greeting + ' ' + this.firstName + ' ' + this.lastName)
// }

// var firstName = 'Ali'
// var lastName = 'Mousavi'

// var nima = {
//   firstName: 'Nime',
//   lastName: 'Fakhr'
// }

// var amin = {
//   firstName: 'Amin',
//   lastName: 'Kourani'
// }

// welcome('Hi')

// var b = welcome.bind(nima, 'Hello')

// b('Hi')

// var newFunc = welcome.bind(amin, 'Salam')
// newFunc()

// welcome.apply(nima, ['Hello'])

// welcome.apply(amin, ['Salam'])

// welcome.call(nima, 'Hello')

// welcome.call(amin, 'Salam')

// var name = 'Fatemeh'
// var family = 'Barati'

// function getFullName () {
//   console.log(this)
//   console.log(this.name + ' ' + this.family)
// }

// getFullName()

// var mohsen = {
//   name: 'Mohsen',
//   family: 'SafiZadeh',
//   getFullName: getFullName
// }

// console.log(mohsen.getFullName === getFullName)

// mohsen.getFullName()

// console.log(this)

// function Func () {
//   console.log(this)
// }

// var f = new Func()

// console.log(f instanceof Func)

// var ali = {
//   name: 'Ali',
//   family: 'Mousavi',
//   age: 32,
//   getFullName: function () {
//     console.log(this)
//     return this.name + ' ' + this.family
//   }
// }

// console.log(ali.getFullName())

// function Person (name, family, age) {
//   this.firstName = name
//   this.lastName = family
//   this.age = age
//   this.getFullName = function () {
//     return this.firstName + ' ' + this.lastName
//   }
// }

// var ali = new Person('Ali', 'Mousavi', 32)

// var tahmineh = new Person('Tahmineh', 'Rivandi', 20)

// var pegah = new Person('Pegah', 'Shahbazi', 22)

// console.log(ali.getFullName())
// console.log(tahmineh.getFullName())
// console.log(pegah.getFullName())

// console.log(ali instanceof Person)
// console.log(tahmineh instanceof Person)
// console.log(pegah instanceof String)
