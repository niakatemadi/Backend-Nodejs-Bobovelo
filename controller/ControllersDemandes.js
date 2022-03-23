db = require('../models');

const Demande = db.demandes;

// Créer une demande
const addDemande = (req,res) => {

    let info = {

        id_service: req.body.id_service,
        id_utilisateur:req.body.id_utilisateur,
        sujet_demande: req.body.sujet_demande,
        adresse: req.body.adresse,
        date_intervention: req.body.date_intervention,
        ville: req.body.ville,
        categorie: req.body.categorie,
        description: req.body.description

    };

    const demande = Demande.create(info);

    console.log('into demande : '+ info.sujet_demande)

    res.status(200).send(demande)
}

// Recevoir les demandes d'un seul utilisateur
const mesDemandes = async (req,res) => {

    const id = req.params.id;

    const mesdemandes = await Demande.findAll({ where : { id : id}});

    res.status(200).send(mesdemandes)
}

// Accepter la demande d'un seul utilisateur

const acceptDemande = (req, res) => {

    const id = req.params.id ;

    const DemandeUpdated = Demande.update(req.body, { where: { id : id }}) ;

    res.status(200).send(DemandeUpdated)
}

// Refuser la demande d'un utilisateur
const RefusDemande = (req, res) => {

    const id = req.params.id ;

    const DemandeUpdated = Demande.update(req.body, { where: { id : id }}) ;

    res.status(200).send(DemandeUpdated)
}
module.exports = {
    addDemande,
    mesDemandes,
    acceptDemande,
    RefusDemande
}