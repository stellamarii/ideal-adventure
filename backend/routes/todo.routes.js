const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todo.controller")
/*
router.use((req, res, next) => {
    const { name } = req.body
    const { title } = req.body
    const { priority } = req.body

    //if (name !== "Raimo") throw new Error("Noup");

    req.user = {
        title: "abc",
        priority: "1"
    }

    console.log(req.body);
    next()
})*/

router.get("/", todoController.read)
router.post("/:name", todoController.create)
router.put("/:name", todoController.update)
router.delete("/:name", todoController.delete)

module.exports = router
