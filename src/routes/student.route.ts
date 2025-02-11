import express from 'express';
import Student from '../models/studen.model';

const router = express.Router();

// Create Student
router.post('/', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ error });
    }
});

// Get All Students
router.get('/', async (_, res) => {
    const students = await Student.find();
    res.json(students);
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
        res.status(400).json({ error });
    }
});

export default router;
