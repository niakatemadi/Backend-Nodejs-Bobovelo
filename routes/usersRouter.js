const userController = require('../controller/ControllersUser.js');
const router = require('express').Router();

// Créer un utilisateur
router.post('/createUsername', userController.createUser);

// récupérer tout les utilisateurs
router.get('/getUsers', userController.getUsers);



// Récupérer un utilisateur en particulier
router.get('/:id', userController.getOneUser);

// Supprimer un utilisateur
router.delete('/:id', userController.deleteOneUser);

// Modifier un utilisateur
router.put('/:id', userController.updateOneUser);


module.exports = router;