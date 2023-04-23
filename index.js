const express = require("express")

const app = express()

app.listen('3000')

// middleware
// app.use(express.json())

// app.route('/').get((req, res) => res.send(req.query.name))

// app.route('/').post((req, res) => res.send(req.body))

// app.route('/:parametro').get((req, res) => res.send(req.params.parametro))

// app.route('/').post((req, res) => {
//     const {livros_favoritos} = req.body
//     res.send(livros_favoritos)
// })

// app.route('/').get((req,res) => res.send("Olá meu amigo"))
// app.route('/:variavel').get((req,res) => res.send(req.params.variavel))
// app.route('/identidade/:nome').get((req,res) => res.send(req.params.nome))

app.route('/').get((req, res) => res.send(req.query.nome))
app.route('/about/user').get((req, res) => res.send(req.query.cidade))