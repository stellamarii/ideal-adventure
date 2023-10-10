//CRUD

let cats = ["fluffy", "kitty"]

exports.create = (req, res) => {
    //POST

    const { name } = req.params
    //console.log(name)
    cats.push(name)
    res.send(name)
}

exports.read = (req, res) => {
    //GET
    //console.log(req.user)
    res.send(cats)
}

exports.update = (req, res) => {
    //PUT
    const { name } = req.params
    const catIndex = cats.indexOf(name)
    if (catIndex !== -1) {
        cats[catIndex] = cats[catIndex] + name
    }
    res.send(cats)
}

exports.delete = (req, res) => {
    //DELETE
    const { name } = req.params
    const catIndex = cats.indexOf(name)
    if (catIndex !== -1) {
        cats.splice(catIndex, 1)
    }
    res.send(cats)
}
