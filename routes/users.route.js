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
 * Update a user by Id
 */
router.patch('/update/:id', usersController.update);

/**
 * Bulk-Update by user id array
 * user id's array pass in body
 */
router.patch('/bulk-update', usersController.bulkUpdate);

/**
 * delete the user by its Id
 */
router.delete('/delete/:id', usersController.delete)

module.exports = router;