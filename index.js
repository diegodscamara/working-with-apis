const express = require('express')

const app = express()

app.listen('3000')

//middleware
app.use(express.json())

app.route('/').post((req, res) => {
  const { nome, cidade, livros } = req.body
  res.send(`Meu nome é ${nome} e minha cidade é ${cidade} e meus livros são ${livros}`)
})