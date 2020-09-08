const DAL = require('../dal/dal');

const dal = new DAL();

module.exports = class MockBLL {
    async getMock() {
        const result = await dal.read('mock_data', 1);
        console.log('vaze: ' + result);
        return result;
    };
}