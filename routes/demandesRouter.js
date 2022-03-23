const ControllersDemandes = require('../controller/ControllersDemandes.js');
const router = require('express').Router();

// Créer une nouvelle demande 
router.post('/createDemande', ControllersDemandes.addDemande);

// Récupérer toutes les demandes d'un utilisateur
router.get('/:id', ControllersDemandes.mesDemandes);


// Accepter la demande d'un utilisateur
router.put('/acceptOneDemande/:id', ControllersDemandes.acceptDemande);

// Refuser la demande d'un utilisateur
router.put('/refuserOneDemande/:id', ControllersDemandes.RefusDemande);

module.exports = router;