// const obj2 = {
//   family: 'Mousavi',
//   getFulName: function () {
//     return `${this.name} ${this.family}`
//   }
// }

// const obj1 = {
//   name: 'Ali'
// }

// obj1.__proto__ = obj2

// console.log(obj1.name)
// console.log(obj1.family)
// obj1.getFulName()

class Animal {
  constructor (type) {
    this.type = type
  }

  eat () {
    console.log('HUM HUM')
  }
}

class Cat extends Animal {
  constructor (name) {
    super('CAT')
    this.name = name
  }

  speak () {
    console.log('MU Mu')
  }

  eat () {
    console.log('CHUM CHUM')
    super.eat()
  }
}

class PersianCat extends Cat {
  constructor (name, color) {
    super(name)
    this.color = color
  }

  speak () {
    console.log('Myav Myav')
  }

  attack () {
    console.log('PEKH')
  }
}

const pangool = new PersianCat('Pangool', 'White')

console.log(pangool instanceof PersianCat)
console.log(pangool instanceof Cat)
console.log(pangool instanceof Animal)
console.log(pangool instanceof Object)

const number = new Number(12)

console.log(number)
console.log(typeof number)
console.log(number == 12)
console.log(number === 12)

// pangool.eat()
// pangool.speak()
// pangool.attack()

// const kitty = new Cat('Kitty')

// console.log(kitty)
// kitty.eat()
// kitty.speak()

// const puppy = new Animal('DOG')

// console.log(puppy)

// puppy.eat()
