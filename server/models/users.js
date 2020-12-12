const mongoose = require('mongoose');
const UsersSchema = require('../schemas/users');

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;