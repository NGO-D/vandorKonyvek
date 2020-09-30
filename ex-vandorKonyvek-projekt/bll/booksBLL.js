const DAL = require('../dal/dal');

const dal = new DAL();

module.exports = class BooksBLL {
async getBooks() {
    const result = await dal.read('books');
    return result;
};

async createBooks() {
    const result = await dal.create('books', object);
    return result;
};

async updateBooks() {
    const result = await dal.update('books', object);
    return result;
};

async deleteBooks() {
    const result = await dal.delete('books', id);
    return result;
};
}