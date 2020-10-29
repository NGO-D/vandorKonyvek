const DAL = require('../dal/dal');

const dal = new DAL();

module.exports = class MockBLL {
async getMock() {
    const result = await dal.read('mock_data');
    return result;
};

async createMock(object) {
    const result = await dal.create('mock_data', object);
    return result;
};

async updateMock(object) {
    const result = await dal.update('mock_data', object);
    return result;
};

async deleteMock(id) {
    const result = await dal.delete('mock_data', id);
    return result;
};
}