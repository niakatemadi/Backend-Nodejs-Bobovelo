const db = require('../models');

const Service = db.services

// Ajouter un service
const addService = (req,res) => {

    let info = {
        id_utilisateur: req.body.id_utilisateur,
        titre: req.body.titre,
        description: req.body.description,
        tarif: req.body.tarif,
        rayon_intervention: req.body.rayon_intervention,
        ville: req.body.ville,
        categorie: req.body.categorie
    
    };
    console.log(info.titre);
    const newService = Service.create(info);

    res.status(200).send(newService);

};

// Récupérer tous les services

const allServices = async (req, res) => {

    const services = await Service.findAll({});

    res.status(200).send(services)
}

// Suprimer un service

const deleteOneService = (req, res) => {

    const id = req.params.id;

    Service.destroy({ where : { id : id }})

    res.json('service Deleted !')
}

// Récupérer mes services

const mesServices = async (req, res) => {
    const id = req.params.id;

    const messervices = await Service.findAll({ where : { id_utilisateur : id}});

    res.status(200).send(messervices);

}

module.exports = {
    addService,
    allServices,
    mesServices,
    deleteOneService
}