const Router = require('express').Router;
const BookController = require('../controllers/bookController');
const router = Router();

// Getting all
router.get('/', BookController.index);

// Getting one by name
router.get('/name', BookController.searchByName);

// Getting One
router.get('/:id', BookController.show);

// Creating one
router.post('/', BookController.store);

// Updating one
router.put('/:id', BookController.update);

// Deleting one
router.delete('/:id', BookController.destroy);

// Deleting many
router.patch('/', BookController.destroyMany);

module.exports = router;