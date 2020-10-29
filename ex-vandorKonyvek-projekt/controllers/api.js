const express = require('express');
const router = express.Router();

const AdminsBll = require('../bll/adminsBLL');
const BasketsBll = require('../bll/basketsBLL');
const BooksBll = require('../bll/booksBLL');
const MockBll = require('../bll/mockBLL');
const OrdersBll = require('../bll/ordersBLL');
const UsersBll = require('../bll/usersBLL');

const adminsBLL = new AdminsBll();
const basketsBLL = new BasketsBll();
const booksBLL = new BooksBll();
const mockBLL = new MockBll();
const ordersBLL = new OrdersBll();
const usersBLL = new UsersBll();



router.get('/', async (req, res, next) => {
  res.json({message: 'Api works'});
});
 

// ADMINS
// Get admins
router.get('/admin', async (req, res, next) => {
  const result = await adminsBLL.getAdmins();
  res.json(result);
});

// Create new admin
router.post('/admin/new', async (req, res, next) => {
  let result = await adminsBLL.createAdmins(req.body);
  res.json(result);
});

// Update admin - kérdéses
router.put('/admin', async (req, res, next) => {
  let result = await adminsBLL.updateAdmins(req.body);
  res.json(result);
});

// Delete admin
router.delete('/mock/:id', async (req, res, next) => {
  let result = await adminsBLL.deleteAdmins(req.params.id);
  res.json(result);
});


// BASKETS
// Get baskets
router.get('/basket', async (req, res, next) => {
  const result = await basketsBLL.getBaskets();
  res.json(result);
});

// Create new basket
router.post('/basket/new', async (req, res, next) => {
  let result = await basketsBLL.createBaskets(req.body);
  res.json(result);
});

// Update basket - kérdéses
router.put('/basket', async (req, res, next) => {
  let result = await basketsBLL.updateBaskets(req.body);
  res.json(result);
});

// Delete basket
router.delete('/basket/:id', async (req, res, next) => {
  let result = await basketsBLL.deleteBaskets(req.params.id);
  res.json(result);
});


// BOOKS
// Get books
router.get('/books', async (req, res, next) => {
  const result = await booksBLL.getBooks();
  res.json(result);
});

// Create new book
router.post('/books/new', async (req, res, next) => {
  let result = await booksBLL.createBooks(req.body);
  res.json(result);
});

// Update book - kérdéses
router.put('/books/:id', async (req, res, next) => {
  let result = await booksBLL.updateBooks(req.body);
  res.json(result);
});

// Delete book
router.delete('/books/:id', async (req, res, next) => {
  const result = await booksBLL.deleteBooks(req.params.id);
  res.json(result);
});


// MOCKS
// Get mocks
router.get('/mock', async (req, res, next) => {
  const result = await mockBLL.getMock();
  res.json(result);
});

// Create new mock
router.post('/mock/new', async (req, res, next) => {
  let result = await mockBLL.createMock(req.body);
  res.json(result);
});

// Update mock - kérdéses
router.put('/mock', async (req, res, next) => {
  let result = await mockBLL.updateMock(req.body);
  res.json(result);
});

// Delete mock
router.delete('/mock/:id', async (req, res, next) => {
  let result = await mockBLL.deleteMock(req.params.id);
  res.json(result);
})


// ORDERS
// Get orders
router.get('/orders', async (req, res, next) => {
  const result = await ordersBLL.getOrders();
  res.json(result);
});

// Create new order
router.post('/orders/new', async (req, res, next) => {
  let result = await ordersBLL.createOrders(req.body);
  res.json(result);
});

// Update order - kérdéses
router.put('/orders', async (req, res, next) => {
  let result = await ordersBLL.updateOrders(req.body);
  res.json(result);
});

// Delete order
router.delete('/orders/:id', async (req, res, next) => {
  let result = await ordersBLL.deleteOrders(req.params.id);
  res.json(result);
});


// USERS
// Get users
router.get('/users', async (req, res, next) => {
  const result = await usersBLL.getUsers();
  res.json(result);
});

// Create new user
router.post('/users/new', async (req, res, next) => {
  let result = await usersBLL.createUsers(req.body);
  res.json(result);
});

// Update user - kérdéses
router.put('/users', async (req, res, next) => {
  let result = await usersBLL.updateUsers(req.body);
  res.json(result);
});

// Delete user
router.delete('/users/:id', async (req, res, next) => {
  let result = await usersBLL.deleteUsers(req.params.id);
  res.json(result);
});

module.exports = router;

