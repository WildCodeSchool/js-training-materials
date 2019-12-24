const models = require('../models')
const Data = require('../data')


module.exports = function(app) {
    app.get('/users', (req, res) =>{
        models
            .User
            .findAll({include : [models.Post]})
            .then(users => res.json(users))  
    })

    app.get('/users/:id', (req, res) =>{
        models
            .User
            .findByPk(req.params.id, { include : models.Post})
            .then(users => res.json(users))
    })
    
    app.post('/users', (req, res) =>{
        models
            .User
            .bulkCreate(Data)
            .then(users => res.json(users))
    })
    
}