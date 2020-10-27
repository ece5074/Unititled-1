const userDAO = require('./userDAO');

module.exports.index = userDAO.indexUser
module.exports.show = userDAO.showUser
module.exports.add = userDAO.addUser
module.exports.delete = userDAO.deleteUser
module.exports.put = userDAO.editUser