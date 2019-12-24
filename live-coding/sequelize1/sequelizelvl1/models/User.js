'use-strict'

module.exports = (sequelize, Datatypes) =>{
    const User = sequelize.define('User', {
        name : {
            type : Datatypes.STRING
        },
        email : {
            type : Datatypes.STRING
        },
        password : {
            type : Datatypes.STRING
        },
        address :{
            type : Datatypes.STRING
        }
    }, {
        timestamps : false
    })

    User.associate = function(models){
        User.hasMany(models.Post)
    }

    return User
}