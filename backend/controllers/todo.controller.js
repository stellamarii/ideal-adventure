const { v4: uuidv4 } = require("uuid")

//console.log(uuidv4())

let todos = [
    {
        id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        title: "Bring milk",
        priority: 0,
        created: 1696588906169,
        updated: null,
        deleted: false
    },
    {
        id: "9b1deb4d-3b7d-4bad-9bdd-2b0djj3dcb6d",
        title: "m",
        priority: 0,
        created: 1696588906168,
        updated: null,
        deleted: false
    }
]
exports.create = (req, res) => {
    //POST

    const { title, priority } = req.body
    const id = uuidv4()
    const created = Date.now()
    const updated = null
    const deleted = false
    //console.log(title, priority)
    const newTodo = {id, title, priority, created, updated, deleted}
    todos.push(newTodo)

    res.send(newTodo)
}

exports.read = (req, res) => {
    //GET
    res.send(todos.filter(({ deleted }) => deleted == false))
}

exports.update = (req, res) => {
    //PUT oleks vaja body-ga kaasa saata id, title, priority ehk backendis leiate id abil massiivist todo üles, kui leitud, siis uuendada title ja priority, created jääks samaks, updated uuendada backendis, deleted jääks samaks
    const { title, priority } = req.body
    const todo = todos.find(({ id }) => id === req.body.id)
    todo.title = title
    todo.priority = priority
    todo.updated = Date.now()

    res.send(todos.filter(({ deleted }) => deleted == false))

}

exports.delete = (req, res) => {
    //DELETE
    const todo = todos.find(({ id }) => id === req.body.id)
    //console.log(req.params, result.deleted)
    todo.deleted = !todo.deleted

    const results = todos.filter(({ deleted }) => deleted == false)
    res.send(results)
}
