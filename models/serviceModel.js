module.exports = (sequelize, DataTypes) => {

   const Service = sequelize.define("services", {

        titre : {
            type: DataTypes.STRING,
            allowNull: false
        },
        description : {
            type: DataTypes.STRING
        },
        tarif : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rayon_intervention : {
            type: DataTypes.INTEGER
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
        }
   });
    
   return Service
}