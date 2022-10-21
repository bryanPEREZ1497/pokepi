const Router = require('express').Router;
const subscriberController = require('../controllers/subscriberController');
const router = Router();

// Getting all
router.get('/', subscriberController.index);

// Getting one by name
router.get('/name', subscriberController.searchByName);

// Getting One
router.get('/:id', subscriberController.show);

// Creating one
router.post('/', subscriberController.store);

// Updating one
router.put('/:id', subscriberController.update);

// Deleting one
router.delete('/:id', subscriberController.destroy);

// Deleting many
router.patch('/', subscriberController.destroyMany);

module.exports = router;