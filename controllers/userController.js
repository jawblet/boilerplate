const User = require('../models/userModel');
const handler = require('../controllers/genericController');

exports.getUserById = handler.getOneById(User, 'graph');
exports.getAllUsers = handler.getAll(User);
exports.deleteOneUser = handler.deleteOne(User);
exports.deleteAllUsers = handler.deleteMany(User);
exports.createUser = handler.create(User);
exports.updateUser = handler.upsert(User);
