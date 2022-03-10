const PlayerModel = require('../models/player');


module.exports = {
  list,
  addToList,
};

async function list(req, res) {
    console.log(req.body)
    try {
        const players = await PlayerModel.find({user: req.user._id});
        res.status(200).json(players)         
    } catch(err) {
    res.status(400).json(err);
    }
}

async function addToList(req, res) {
    try {
        // 1. put the player in the database (the data will be incoming via `req.body`)
        await PlayerModel.create({id: req.body.id, first_name: req.body.first_name})
        // 2. send a response to frontend
        res.status(200).json('ok')
    } catch(err) {
    res.status(400).json(err);
    }
}