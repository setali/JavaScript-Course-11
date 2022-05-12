export default function request (url, method = 'GET') {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.send()

    xhr.onload = function () {
      resolve(JSON.parse(xhr.response))
    }

    xhr.onerror = function () {
      reject('Data fetching failed.')
    }
  })
}
