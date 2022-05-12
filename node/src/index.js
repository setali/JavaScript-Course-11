import { random } from 'lodash'
import { sum as mySum, sub } from './sum'
import ali from './sum'
// const os = require('os')
// const path = require('path')
// const fs = require('fs')
// const axios = require('axios')

// axios('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => console.log(response.data.name))
//   .catch(err => console.log(err))

console.log(random(0, 10))

console.log(mySum(2, 8))
console.log(ali(5, 6))
// console.log(sub(12, 8))

// console.log('CPU cores', os.cpus().length)

// const p = path.resolve(__dirname, 'temp', 'text.txt')

// const data = fs.readFileSync(p, 'utf-8')

// console.log(data)
