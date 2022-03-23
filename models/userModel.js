module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("users", {

        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prenom: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        telephone: {
            type: DataTypes.INTEGER
        },
        adresse: {
            type: DataTypes.STRING
        }
    })

    return Users
}
