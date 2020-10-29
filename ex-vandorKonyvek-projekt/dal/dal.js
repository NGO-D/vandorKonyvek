const mariadb = require('mariadb');
const pool = mariadb.createPool({
    user: 'root',
    password: 'rootroot',
    database: 'vandor'// database name
});

  module.exports = class DAL {
    constructor() {
      pool.getConnection().then(conn => this.conn = conn);
    }
  
    async read(table, id) {
      if (id) {
        const query = `
        SELECT * 
        FROM ${table}
        WHERE id=${id}
        `;
        const result = await this.conn.query(query);
        return result[0];
      }
      const query = `
           SELECT * 
           FROM ${table}
           `;
      const result = await this.conn.query(query);
      return result;
    }
  
    async create(table, record) {
      console.log('már a dalnál vagyok...');
      const query = `
      INSERT INTO ${table} (${Object.keys(record).join(', ')})
      VALUES (${Object.values(record).map(value => (typeof value === 'number' ? `${value}` : `'${value}'`)).join(', ')})
      `;
      const result = await this.conn.query(query);
      return result;
    }
  
    async update(table, record) {
      const query = `
      UPDATE ${table}
      SET ${Object.keys(record).map(key => (typeof record[key] === 'number' ? `${key}=${record[key]}` : `${key}='${record[key]}'`)).join(', ')}
      WHERE id=${record.id}
      `;
      const result = await this.conn.query(query);
      return result;
    }
  
    async delete(table, id) {
      console.log('bekaphatodDAL');
      const query = `
      DELETE FROM ${table}
      WHERE id=${id};
      `;
      const result = await this.conn.query(query);
      return result;
    }
  
    async innerJoinRead(table1, table2, on1, on2, table1id) {
      if (table1id) {
        const query = `
           SELECT * 
           FROM ${table1}
              INNER JOIN ${table2} ON ${table1}.${on1}=${table2}.${on2}
           WHERE ${table1}.id=${table1id};
           `;
        const result = await this.conn.query(query);
        return result;
      }
      const query = `
           SELECT * 
           FROM ${table1}
              INNER JOIN ${table2} ON ${table1}.${on1}=${table2}.${on2};
           `;
      const result = await this.conn.query(query);
      return result;
    }
};