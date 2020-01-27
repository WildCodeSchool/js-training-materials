# Sequelize lvl 1

Sequelize lvl 1 / User and Post models where User have many post association

## Release / Update date

Original release: 23/12/2019

## Description

Hello, this is a sequelize live-coding. For an introduction about sequelize it's important to present the [sequelize lesson](https://docs.google.com/presentation/d/1gNfuoZcDwAiln8-sStmQZ99SnR9mqhPobMdYceXlvgg/edit#slide=id.p) and turn into a little live-coding during the presentation of the notion. 
For this live-coding, you will create a sequelize back-end with two models, User and Post where the User have many Posts.
There is also a live [FR].


## Folders and files
[config](./sequelizelvl1/config/config.json) / containing config.json where you set the connexion with your database

[models](./sequelizelvl1/models) / containing your two models User and Post

[routes](./sequelizelvl1/routes) / containing the routes you use for User and Post models

[data.js](./sequelizelvl1/data.js) / used for injecting data into User model by bulkCreate(data) in routes/user.js

[index.js](./sequelizelvl1/index.js) / used as an entry point


## Commands
npm init -y

sequelize init

npm i sequelize express mysql2 body-parser

touch index.js

nodemon index.js


## Links

[Live sequelize lvl 1](https://www.youtube.com/watch?v=fok9kzWQ4xE)

[Repository](./sequelizelvl1)

[Git history index.js](https://github.githistory.xyz/Chojiu15/SequelizeLvl1/blob/master/index.js)


## Requirements

Beginners node | express | sql


## Author

yacine@wildcodeschool.fr 
[Slack profile](https://app.slack.com/client/T6SG2QGG2/GHKASSHPX/user_profile/UHPHN53TN)