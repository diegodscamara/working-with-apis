const url = 'http://localhost:5500/api'

function getUsers() {
  axios.get(url)
    .then(response => {
      renderApiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addnewUser(newUser) {
  axios.post(url, newUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

getUsers()

const newUser = {
  name: 'Diego Camara',
  avatar: 'http://picsum.photos/200/300',
  city: 'Esperança'
}

addnewUser()