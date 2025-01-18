const express = require('express');
const tasksController = require('../controllers/tasksController');
const { identifier } = require('../middlewares/identification');
const router = express.Router();

router.get('/all-tasks', tasksController.getTasks);
router.get('/single-task', tasksController.singleTask);
router.post('/create-task', identifier, tasksController.createTask);

router.put('/update-task', identifier, tasksController.updateTask);
router.delete('/delete-task', identifier, tasksController.deleteTask);

module.exports = router;