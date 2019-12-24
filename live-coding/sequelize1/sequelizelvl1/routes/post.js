const models = require('../models')

module.exports = function(app){
    app.get('/post', (req, res) =>{
        models 
            .Post
            .findAll()
            .then(post => res.json(post))
    })

    app.post('/post', (req, res) =>{
        models 
            .Post
            .create(req.body)
            .then(post => res.json(post))
    })

}