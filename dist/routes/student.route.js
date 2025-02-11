"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studen_model_1 = __importDefault(require("../models/studen.model"));
const router = express_1.default.Router();
// Create Student
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = new studen_model_1.default(req.body);
        yield student.save();
        res.status(201).json(student);
    }
    catch (error) {
        res.status(400).json({ error });
    }
}));
// Get All Students
router.get('/', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield studen_model_1.default.find();
    res.json(students);
}));
// Update Student
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield studen_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(student);
    }
    catch (error) {
        res.status(400).json({ error });
    }
}));
// Delete Student
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield studen_model_1.default.findByIdAndDelete(req.params.id);
        res.json({ message: 'Student deleted successfully' });
    }
    catch (error) {
        res.status(400).json({ error });
    }
}));
exports.default = router;
