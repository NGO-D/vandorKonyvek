const mariadb = require('mariadb');
const pool = mariadb.createPool({
    user: 'root',
    password: 'root',
    database: 'vandor' // database name
});

module.exports = class DB {
    constructor() {
        pool.getConnection().then(conn => this.conn = conn);
    };
}