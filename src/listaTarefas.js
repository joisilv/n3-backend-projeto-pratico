const express = require("express")
const listaTarefas = express()

//rotas
const index = require("./routes/index")
const tarefas = require("./routes/tarefasRoute")


listaTarefas.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

listaTarefas.use("/", index)
listaTarefas.use("/tarefas", tarefas)

module.exports = listaTarefas
