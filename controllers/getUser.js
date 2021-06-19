// User model
const { disconnectDB } = require('../db');
const { UserModel } = require('../models/user');

const getUser = (req, res) => {
  UserModel.find()
      .then(users => {
        res.json(users);
      });
};

module.exports = { getUser };
