request('https://jsonplaceholder.typicode.com/users')
  .then(data => renderPage(data))
  .catch(err => console.log(err))
