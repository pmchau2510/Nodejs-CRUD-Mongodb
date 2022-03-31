const Task = require('../models/Task');
const getAllTasks = async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });

};

const createTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(202).json({ task });
};

const getTask = async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
        return res.status(404).json({
            messagee: 'No task with id'
        });
    }
    res.status(200).json({ task });
};

const deleteTask = async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
        return res.status(404).json({
            messagee: 'No task with id'
        });

    }
    res.status(200).json({ task });

};

const updateTask = async (req, res) => {

    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!task) {
        return res.status(404).json({
            messagee: 'No task with id'
        });

    }
    res.status(200).json({ task });
};




module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}