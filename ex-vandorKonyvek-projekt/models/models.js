const mariadb = require('mariadb');
const pool = mariadb.createPool({
    user: 'root',
    password: 'rootroot',
    database: 'mysql' // database name
});

module.exports = class DB {
    constructor() {
        pool.getConnection().then(conn => this.conn = conn);
    };
    async readOne(table) {
        const sql = `
             SELECT * 
             FROM ${table}
            
             `;
        const result = await this.conn.query(sql);
        console.log(`readAll ${result[0]}`);
        return result[0];
    };
}