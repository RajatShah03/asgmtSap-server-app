// User model
const { UserModel } = require('../models/user');
const { hashPassword } = require('../helpers/hash');
const { disconnectDB } = require('../db');

const postUser = async (req, res) => {
  console.log('User body: ', req.body);
  const clone = {...req.body};

  // applying basic hash to password
  clone.password = await hashPassword(clone.password);

  const newUser = new UserModel(clone);
  newUser.save()
         .then(user => {
            res.json(user);
          });
};

module.exports = { postUser };