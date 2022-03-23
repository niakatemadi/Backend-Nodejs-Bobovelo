module.exports = (sequelize, DataTypes) => {

    const Demande = sequelize.define("demandes", {

        sujet_demande : {
            type: DataTypes.STRING,
            allowNull: false
        },
        description : {
            type: DataTypes.STRING
        },
        etat : {
            type: DataTypes.STRING
        },
        date_intervention : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ville : {
            type: DataTypes.STRING,
            allowNull: false
        },
        categorie : {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_utilisateur : {
            type :DataTypes.INTEGER,
            allowNull: false
        },
        id_service : {
            type :DataTypes.INTEGER,
            allowNull: false
        },
        date_demande : {
            type :DataTypes.INTEGER
        },
        adresse : {
            type :DataTypes.STRING,
            allowNull: false
        }

    })

    return Demande
}