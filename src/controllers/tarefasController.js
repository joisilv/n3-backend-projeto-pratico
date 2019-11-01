const tarefas = require("../model/tarefas.json")

exports.get = (req, res) => {
  console.log(req.url)
  res.status(200).send(tarefas)
}

  exports.getById = (req, res) => {
   const id = req.params.id
   if (id > 34 || id <= 0) {
    res.redirect(301, "https://en.wikipedia.org/wiki/Man-in-the-middle_attack")
   }
  res.status(200).send(tarefas.find(tarefa => tarefa.id == id))
 }

// exports.getDataInclusao = (req, res) => {
//   const id = req.params.id
//   const tarefa = tarefas.find(tarefa => tarefa.id == id)
//   if (!tarefa) {
//     res.send("Nao encontrei essa tarefa")
//   }
//   const statusTarefa = tarefa.concluido
//   const tarefaOk = statusTarefa.filter(concluido => tarefa.Ok == "true")
//   const realizouTarefa = tarefaOk.map(concluido => realizou.tarefa)
//   res.send(realizouTarefa)
// }

// exports.getDescrição = (req, res) => {
//   const descrição = tarefas.filter(tarefa => {
//     console.log(tarefa)
//     return tarefa.descricao == "true"
//   })
//   const descricaoTarefa = descricao.map(tarefa => tarefa.nome)

//   res.status(200).send(descricaoTarefa)
// }


exports.getConcluido = (req, res) => {
const conclusaoTarefa = tarefas.filter(tarefa => tarefa.concluido == "true")
res.status(200).send(conclusaoTarefa)
}

exports.getByNome = (req, res) => {
  const nome = req.params.nomeColaborador
  const encontrarNome = tarefas.filter(tarefa => tarefa.nomeColaborador == nome)
  if(encontrarNome.length == 0){
    res.sendStatus(404)
  }
  else{
  res.status(200).send(encontrarNome)}
  
}


