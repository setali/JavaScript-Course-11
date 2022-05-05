const os = require('os')
const path = require('path')
const fs = require('fs')
const { sum, sub } = require('./sum')
const { random } = require('lodash')
const axios = require('axios')

axios('https://jsonplaceholder.typicode.com/users/1')
  .then(response => console.log(response.data.name))
  .catch(err => console.log(err))

console.log(random(0, 10))

// console.log(sum(2, 8))
// console.log(sub(12, 8))

// console.log('CPU cores', os.cpus().length)

// const p = path.resolve(__dirname, 'temp', 'text.txt')

// const data = fs.readFileSync(p, 'utf-8')

// console.log(data)
