const express = require('express');
const usersController = require('../controllers/users.controller');
const router = express.Router();

/**
 * Get all the users
 * Can use limit query
 * Accept limit as number
 */
router.get('/all', usersController.getAll);

/**
 * find random user every time
 * One user at a time
 */
router.get('/random', usersController.randomUser);

/**
 * Create a new user
 */
router.post('/save', usersController.save);

/**
 * delete the user by its id
 */
router.delete('/delete/:id', usersController.delete)

module.exports = router;