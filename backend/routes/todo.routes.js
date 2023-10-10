const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todo.controller")

router.get("/", todoController.read)
router.post("/:name", todoController.create)
router.put("/:name", todoController.update)
router.delete("/:name", todoController.delete)

module.exports = router
