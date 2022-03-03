function myTimeout (a) {
  setTimeout(function () {
    console.log(a)
  }, 1000)
}

function func () {
  var i
  for (var i = 0; i < 5; i++) {
    // myTimeout(i)
    setTimeout(
      function (a) {
        console.log(i, a)
      },
      1000 * i,
      i
    )
  }
}

func()

// var a = 0

// var intervalId = setInterval(function () {
//   console.log('Ali', ++a, intervalId)

//   if (a === 10) {
//     clearInterval(intervalId)
//   }
// }, 1000)

// function func (a, b) {
//   console.log('Ali', a, b)
// }

// setTimeout(func, 1000, 1, 2)
// console.log(1)
// setTimeout(func, 1000, 'a', 'b')
// console.log(2)

// setTimeout(
//   function (a) {
//     console.log('Qoli', a)
//   },
//   2000,
//   100
// )
// setTimeout(function () {
//   console.log('Fati')
// }, 4000)
// setTimeout(function () {
//   console.log('Eli')
// }, 500)

// function counter () {
//   var value = 0

//   function increase () {
//     value++
//     console.log(value)
//   }

//   function decrease () {
//     value--
//     console.log(value)
//   }

//   return {
//     // increase: increase,
//     // decrease: decrease
//     increase,
//     decrease
//   }
// }

// var myCounter1 = counter()
// var myCounter2 = counter()

// var a = 1

// setInterval(function () {
//   console.log(a++)
// }, 1000)

// function func (a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c
//     }
//   }
// }

// // var result = func(10)(5)(20)

// // console.log(result)

// var func20 = func(20)

// console.log(func20(2)(3))
// console.log(func20(20)(5))
// console.log(func20(20)(12))

// var func30 = func20(10)

// console.log(func30(5))
// console.log(func30(36))

// function func () {
//   // var a

//   console.log(a)

//   var a = 50

//   console.log(a)
// }

// func()

// // var a = 1,
//   b = 2,
//   c = 5

// var d = a + b + c
// ;(b + c).toFixed()
// ;[a, b] = [b, a]

// var a = 20

// var family = 'Mousavi'

// console.log(family)

// function func () {
//   console.log(a)

//   window.c = 10

//   var b = 5

//   function func2 () {
//     d = 50

//     console.log(b)
//     console.log(family)

//     var f = 60
//     console.log(f)
//   }

//   console.log(b)

//   func2()
// }
// console.log(a)

// func()

// console.log(c)
// console.log(d)
