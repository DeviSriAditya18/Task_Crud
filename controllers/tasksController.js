const { createTaskSchema } = require('../middlewares/validator');
const Task = require('../models/tasksModel');

exports.getTasks = async (req, res) => {
	const { page } = req.query;
	const tasksPerPage = 10;

	try {
		let pageNum = 0;
		if (page <= 1) {
			pageNum = 0;
		} else {
			pageNum = page - 1;
		}
		const result = await Task.find()
			.sort({ createdAt: -1 })
			.skip(pageNum * tasksPerPage)
			.limit(tasksPerPage)
			.populate({
				path: 'userId',
				select: 'email',
			});
		res.status(200).json({ success: true, message: 'tasks', data: result });
	} catch (error) {
		console.log(error);
	}
};

exports.singleTask = async (req, res) => {
	const { _id } = req.query;

	try {
		const existingTask = await Task.findOne({ _id }).populate({
			path: 'userId',
			select: 'email',
		});
		if (!existingTask) {
			return res
				.status(404)
				.json({ success: false, message: 'Task unavailable' });
		}
		res
			.status(200)
			.json({ success: true, message: 'single task', data: existingTask });
	} catch (error) {
		console.log(error);
	}
};

exports.createTask = async (req, res) => {
	const { title, description, status } = req.body;
	const { userId } = req.user;
	try {
		const { error, value } = createTaskSchema.validate({
			title,
			description,
            status,
			userId,
		});
		if (error) {
			return res
				.status(401)
				.json({ success: false, message: error.details[0].message });
		}

		const result = await Task.create({
			title,
			description,
            status,
			userId,
		});
		res.status(201).json({ success: true, message: 'created', data: result });
	} catch (error) {
		console.log(error);
	}
};

exports.updateTask = async (req, res) => {
	const { _id } = req.query;
	const { title, description, status } = req.body;
	const { userId } = req.user;
	try {
		const { error, value } = createTaskSchema.validate({
			title,
			description,
            status,
			userId,
		});
		if (error) {
			return res
				.status(401)
				.json({ success: false, message: error.details[0].message });
		}
		const existingTask = await Task.findOne({ _id });
		if (!existingTask) {
			return res
				.status(404)
				.json({ success: false, message: 'Task unavailable' });
		}
		if (existingTask.userId.toString() !== userId) {
			return res.status(403).json({ success: false, message: 'Unauthorized' });
		}
		existingTask.title = title;
		existingTask.description = description;
        existingTask.status=status;

		const result = await existingTask.save();
		res.status(200).json({ success: true, message: 'Updated', data: result });
	} catch (error) {
		console.log(error);
	}
};

exports.deleteTask = async (req, res) => {
	const { _id } = req.query;

	const { userId } = req.user;
	try {
		const existingTask = await Task.findOne({ _id });
		if (!existingTask) {
			return res
				.status(404)
				.json({ success: false, message: 'Task unavailable' });
		}
		if (existingTask.userId.toString() !== userId) {
			return res.status(403).json({ success: false, message: 'Unauthorized' });
		}

		await Task.deleteOne({ _id });
		res.status(200).json({ success: true, message: 'deleted' });
	} catch (error) {
		console.log(error);
	}
};