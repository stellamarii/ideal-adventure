//CRUD

let cats = ["fluffy", "kitty"]

exports.create = (req, res) => {
    
    const { name } = req.params
    console.log(name)
    cats.push(name)
    res.send(name)
}

exports.read = (req, res) => {
    //console.log(req.user)
    res.send(cats)
}

exports.update = (req, res) => {}

exports.delete = (req, res) => {}