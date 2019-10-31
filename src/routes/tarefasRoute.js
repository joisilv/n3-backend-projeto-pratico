const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.get)
router.get("/:id", controller.getById)
// router.get("/:id/concluido", controller.getConcluido)
// router.get("/:id/dataInclusao", controller.getDataInclusao)
// router.get("/:id/descricao", controller.getDescricao)

module.exports = router
