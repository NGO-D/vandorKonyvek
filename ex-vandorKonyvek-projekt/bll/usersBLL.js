const DAL = require('../dal/dal');

const dal = new DAL();

module.exports = class UsersBLL {
async getUsers() {
    const result = await dal.read('users');
    return result;
};

async createUsers() {
    const result = await dal.create('users', object);
    return result;
};

async updateUsers() {
    const result = await dal.update('users', object);
    return result;
};

async deleteUsers() {
    const result = await dal.delete('users', id);
    return result;
};
}