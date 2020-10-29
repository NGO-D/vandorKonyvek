const DAL = require('../dal/dal');

const dal = new DAL();

module.exports = class AdminsBLL {
async getAdmins() {
    const result = await dal.read('admins');
    return result;
};

async createAdmins(object) {
    const result = await dal.create('admins', object);
    return result;
};

async updateAdmins(object) {
    const result = await dal.update('admins', object);
    return result;
};

async deleteAdmins(id) {
    const result = await dal.delete('admins', id);
    return result;
};
}