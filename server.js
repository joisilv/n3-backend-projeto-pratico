const listaTarefas = require("./src/listaTarefas")
const port = 3000

listaTarefas.listen(port, function() {
  console.log(`listaTarefas está rodando na porta ${port}`)
})
