const express = require('express');
const router = express.Router();

// Controllers
const { getUser } = require('../../controllers/getUser');
const { postUser } = require('../../controllers/postUser');

// Get User
router.get(
  '/',
  getUser
);

// Post User
router.post(
  '/',
  postUser
);

module.exports = router