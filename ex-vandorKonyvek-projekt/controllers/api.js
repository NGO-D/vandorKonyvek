var express = require('express');
var router = express.Router();
const MockBll = require('../bll/mockBLL');

const mockBLL = new MockBll();

// MOCKS
// Get all mocks
router.get('/mock', async (req, res, next) => {
  const result = await mockBLL.getMock();
  res.json(result);
});

// Get one mock
router.get('/mock/:id', async (req, res, next) => {
  const result = await mockBLL.getMock();
  res.json(result);
});

// Update mock
router.post('/mock/:id', async (req, res, next) => {
  let result = await mockBLL.updateMock(req.body);
  res.json(result);
});

// Create new mock
router.put('/mock', async (req, res, next) => {
  let result = await mockBLL.updateMock(req.body);
  res.json(result);
});

// Delete mock
router.delete('/mock/:id', async (req, res, next) => {
  const mock = await mockBLL.getMock(req.params.id);
  let result = await mockBLL.deleteMock();
  res.json(result);
})

module.exports = router;