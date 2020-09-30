const DAL = require('../dal/dal');

const dal = new DAL();

module.exports = class OrdersBLL {
async getOrders() {
    const result = await dal.read('orders');
    return result;
};

async createOrders() {
    const result = await dal.create('orders', object);
    return result;
};

async updateOrders() {
    const result = await dal.update('orders', object);
    return result;
};

async deleteOrders() {
    const result = await dal.delete('orders', id);
    return result;
};
}