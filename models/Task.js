const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'must provide title'],
    },
});

module.exports = mongoose.model('Task', TaskSchema);