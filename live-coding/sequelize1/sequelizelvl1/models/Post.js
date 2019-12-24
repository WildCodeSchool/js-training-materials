'use-strict'


module.exports = (sequelize, Datatypes) =>{
    const Post = sequelize.define('Post', {
        title : {
            type : Datatypes.STRING
        },
        description : {
            type : Datatypes.STRING
        }
    }, {
        timestamps : false
    })
        return Post
}