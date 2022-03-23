const dbConfig = require('../config/dbConfig.js');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host : dbConfig.HOST,
        dialect : dbConfig.dialect,
        operatorsAliases : false

    }
);

sequelize.authenticate()
.then( () => {
    console.log('connected to Database ! ')
}).catch( (err) => {
    console.log('Error : ' + err)
})

db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./userModel.js')(sequelize, DataTypes)
db.services = require('./serviceModel.js')(sequelize, DataTypes)
db.demandes = require('./demandeModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force : false})
.then( () => {
    console.log('yes re-sync done !')
})

module.exports = db
