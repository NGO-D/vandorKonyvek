const DAL = require('../dal/dal');

const dal = new DAL();

module.exports = class BasketsBLL {
async getBaskets() {
    const result = await dal.read('baskets');
    return result;
};

async createBaskets(object) {
    const result = await dal.create('baskets', object);
    return result;
};

async updateBaskets(object) {
    const result = await dal.update('baskets', object);
    return result;
};

async deleteBaskets(id) {
    const result = await dal.delete('baskets', id);
    return result;
};
}