const express = require('express');
const router = express.Router();
const Marks = require('../models/marks.js');

// Get all marks records
router.get('/marks', (req, res) => {
    Marks.find()
        .then(marks => res.json(marks))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Calculate and save new marks record
router.post('/calculateGrade', (req, res) => {
    const marksData = req.body;

    // Your existing grade calculation logic
    if (
        marksData.m1 < 40 ||
        marksData.m2 < 40 ||
        marksData.m3 < 40 ||
        marksData.m4 < 40 ||
        marksData.m5 < 40
    ) {
        return res.json({ grade: 'fail' });
    }

    const totalMarks = marksData.m1 + marksData.m2 + marksData.m3 + marksData.m4 + marksData.m5;
    const average = totalMarks / 5;

    let grade;
    if (average > 90) {
        grade = 'A';
    } else if (average > 80) {
        grade = 'B+';
    } else if (average > 70) {
        grade = 'B';
    } else if (average > 60) {
        grade = 'C';
    } else if (average > 50) {
        grade = 'D';
    } else if (average > 40) {
        grade = 'E';
    } else {
        grade = 'fail';
    }

    const newMarks = new Marks({
        m1: marksData.m1,
        m2: marksData.m2,
        m3: marksData.m3,
        m4: marksData.m4,
        m5: marksData.m5,
        grade: grade,
    });

    newMarks.save()
        .then(savedMarks => res.json({ grade: grade }))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Other routes for updating, deleting, etc.

module.exports = router;
