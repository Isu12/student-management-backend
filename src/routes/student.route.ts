import express from 'express';
import Student from '../models/studen.model';
import mongoose from 'mongoose';

const router = express.Router();

// Create Student
router.post('/', async (req, res) => {
    try {
        console.log("Received Data:", req.body); 
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        console.error('Error saving student:', error);
        res.status(400).json({ error });
    }
});

// Get All Students
router.get('/', async (_, res) => {
    const students = await Student.find();
    res.json(students);
});

//get student by ID
router.get('/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        if (!studentId) {
             res.status(400).json({ message: 'Student ID is required' });
        }

        const student = await Student.findById(studentId);
        if (!student) {
             res.status(404).json({ message: 'Student not found' });
        }

        res.json(student);
    } catch (error) {
        console.error("Error fetching student:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// Update Student
router.put('/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(student);
    } catch (error) {
        res.status(400).json({ error });
    }
});

// Delete Student
router.delete('/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({ message: 'Error deleting student', error });
    }
});

export default router;
