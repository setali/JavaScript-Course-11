const fs = require('fs')

function func (dir, cb) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        reject('Error reading dir: ' + err)
      } else {
        function readFile (filename) {
          return new Promise((resolve, reject) => {
            fs.readFile(`${dir}/${filename}`, 'utf8', (err, data) => {
              if (err) {
                reject('Error reading file: ' + err)
              } else {
                resolve(data)
              }
            })
          })
        }

        resolve({ files, readFile })
      }
    })
  })
}

async function asyncfunc () {
  console.log(1)
  const { readFile, files } = await func('./texts')

  const data = await readFile(files[0])

  console.log(data)
  console.log(2)
}

asyncfunc()

// func('./texts')
//   .then(response => response.readFile(response.files[0]))
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
