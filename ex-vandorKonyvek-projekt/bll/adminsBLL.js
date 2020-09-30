const DAL = require('../dal/dal');

const dal = new DAL();

module.exports = class AdminsBLL {
async getAdmins() {
    const result = await dal.read('admins');
    console.log('getAdmins: ' + result);
    return result;
};

async createAdmins() {
    const result = await dal.create('admins', object);
    console.log('createAdmins: ' + result);
    return result;
};

async updateAdmins() {
    const result = await dal.update('admins', object);
    console.log('updateAdmins: ' + result);
    return result;
};

async deleteAdmins() {
    const result = await dal.delete('admins', id);
    console.log('deleteAdmins: ' + result);
    return result;
};
}