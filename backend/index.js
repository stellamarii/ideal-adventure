const express = require('express')
const app = express()
const port = 8080
const catsRoutes = require("./routes/cat.routes")
const todoRoutes = require("./routes/todo.routes")

app.use(express.json())

app.use("/cats", catsRoutes)
app.use("/todo", todoRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/flights/:from-:to", (req, res) => {
    res.send({
        params: req.params,
        body: req.body,
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})