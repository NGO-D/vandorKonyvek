const DAL = require('../dal/dal');

const dal = new DAL();

module.exports = class OrdersBLL {
async getOrders() {
    const result = await dal.read('orders');
    return result;
};

async createOrders(object) {
    const result = await dal.create('orders', object);
    return result;
};

async updateOrders(object) {
    const result = await dal.update('orders', object);
    return result;
};

async deleteOrders(id) {
    const result = await dal.delete('orders', id);
    return result;
};
}