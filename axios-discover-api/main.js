const url = 'http://localhost:5500/api'

function getUsers() {
  axios.get(url)
    .then(response => {
      renderApiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

getUsers()

function addnewUser(newUser) {
  axios.post(url, newUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const newUser = {
  name: 'Diego Camara',
  avatar: 'http://picsum.photos/200/300',
  city: 'Esperança'
}

// addnewUser()

function getUser(id) {
  axios.get(`${url}/${id}`)
    .then(response => {
      userName.textContent = response.data.name
      userCity.textContent = response.data.city
      userID.textContent = response.data.id
      userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

getUser(2)

function updateUser(id, userUpdated) {
  axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const userUpdated = {
  name: 'Peulo Souza',
  avatar: 'http://picsum.photos/200/300',
  city: 'Recife'
}

updateUser(3)
