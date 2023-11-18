const mongoose = require('mongoose');

const MarksSchema = new mongoose.Schema({
    m1: {
        type: Number,
        required: true,
    },
    m2: {
        type: Number,
        required: true,
    },
    m3: {
        type: Number,
        required: true,
    },
    m4: {
        type: Number,
        required: true,
    },
    m5: {
        type: Number,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
});

const Marks = mongoose.model('Marks', MarksSchema);

module.exports = Marks;
