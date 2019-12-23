# sqlQueries

Sequelize lvl 1 

## Release / Update date

Original release: 23/12/2019

## Description

Hello, this is a sequelize live-coding. For an introduction about sequelize you should first present the [sequelize lesson](https://docs.google.com/presentation/d/1gNfuoZcDwAiln8-sStmQZ99SnR9mqhPobMdYceXlvgg/edit#slide=id.p) and turn into a little live-coding during the presentation of the notion. 
For this live-coding, you will create a sequelize back-end with two models, User and Post where the User have many Posts.
There is also a live [FR].


## Folders and files
config / containing config.json where you set the connexion with your database
models / containing your two models User and Post
routes / containing the routes you use for User and Post models
data.js / used for injecting data into User model by bulkCreate(data) in routes/user.js
index.js / used as an entry point


## Commands
npm init -y
sequelize init
npm i sequelize express mysql2 body-parser
touch index.js

nodemon index.js


## Links

[Live sequelize lvl 1]() incoming
[Repository](https://github.com/Chojiu15/SequelizeLvl1)
[Git history index.js](https://github.githistory.xyz/Chojiu15/SequelizeLvl1/blob/master/index.js)


## Requirements

Beginners node/express


## Author

yacine@wildcodeschool.fr 
[Slack profile](https://app.slack.com/client/T6SG2QGG2/GHKASSHPX/user_profile/UHPHN53TN)