"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const student_route_1 = __importDefault(require("./src/routes/student.route"));
//load environmental variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const dbUri = process.env.MONGO_URI;
if (!dbUri) {
    throw new Error('MONGO_URI is not defined');
}
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//connect to mongoDB
mongoose_1.default.connect(dbUri)
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log('Database connection error:', err));
app.use('/students', student_route_1.default);
app.listen(PORT, () => {
    console.log(`Sever running on PORT ${PORT}`);
});
