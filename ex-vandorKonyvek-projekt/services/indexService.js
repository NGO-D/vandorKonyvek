const DB = require('../models/models');

const db = new DB();

module.exports = class ProductDB {
    async getAllProducts() {
        const result = await db.readOne('db');
        console.log('vaze: ' + result);
        return result;
    };
}