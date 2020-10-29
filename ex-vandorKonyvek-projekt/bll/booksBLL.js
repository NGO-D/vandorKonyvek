const DAL = require('../dal/dal');

const dal = new DAL();

module.exports = class BooksBLL {
async getBooks() {
    const result = await dal.read('books');
    return result;
};

async createBooks(object) {
    const result = await dal.create('books', object);
    return result;
};

async updateBooks(object) {
    const result = await dal.update('books', object);
    console.log('booksbll');
    return result;
};

async deleteBooks(id) {
    console.log('bazmegBLL');
    console.log(id);
    const result = await dal.delete('books', id);
    console.log(result);
    return result;
};
}