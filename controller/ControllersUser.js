const db = require('../models');

const Users = db.users;
// créer un utilisateur

const createUser = (req,res) => {

    let info = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password: req.body.password,
        telephone: req.body.telephone,
        adresse: req.body.adresse
    };
    console.log('datasss'+ info);
    const parent = Users.create(info);
    res.status(200).send(parent);
};

// Récupérer les utilisateurs

const getUsers = async (req,res) => {

    const parent = await Users.findAll({});

    res.status(200).send(parent);
};

// Récupére un seul utilisateur

const getOneUser = async (req,res) => {

    const id = req.params.id;

    const parent = await Users.findOne( { where : { id : id }});

    res.status(200).send(parent);
};

// Suprimer un seul utilisateur

const deleteOneUser = (req,res) => {

    const id = req.params.id;

    Users.destroy({ where : { id : id }});

    res.json('User deleted !');

};

// Modifier un utilisateur 

const updateOneUser = async (req, res) => {

    const id = req.params.id;

   await  Users.update(req.body, { where: { id : id }});
}

module.exports = {
    createUser,
    getUsers,
    getOneUser,
    deleteOneUser,
    updateOneUser
}