const DAL = require('../dal/dal');

const dal = new DAL();

module.exports = class MockBLL {
    async getMock() {
        const result = await dal.read('mock_data', id);
        console.log('getMock: ' + result);
        return result;
    };

    async createMock() {
        const result = await dal.create('mock_data', object);
console.log('createMock: ' + result);
return result;
    };

async updateMock() {
    const result = await dal.update('mock_data', object);
    console.log('updateMock: ' + result);
    return result;
};

async deleteMock() {
    const result = await dal.delete('mock_data', id);
    console.log('deleteMock: ' + result);
    return result;
};
}