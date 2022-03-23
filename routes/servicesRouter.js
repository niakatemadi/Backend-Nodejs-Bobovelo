const ControllersServices = require('../controller/ControllersServices.js');
const router = require('express').Router();

//Créer un service
router.post('/createService', ControllersServices.addService);

// Récupérer tous les services
router.get('/allServices', ControllersServices.allServices);


// Récupérer tous les services d'un utilisateur
router.get('/:id', ControllersServices.mesServices);

// Suprimer le service d'un utilisateur
router.delete('/:id', ControllersServices.deleteOneService);

module.exports = router;

