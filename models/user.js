const mongoose = require('mongoose');

const { Schema } = mongoose;

const userObj = {
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: false,
    trim: true,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  }
};

const userSchema = new Schema(userObj, { timestamps: { createdAt: 'createdAt' } });

const UserModel = mongoose.model('users', userSchema, 'Users');

module.exports = { UserModel };