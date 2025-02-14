import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import studentRoutes from "./src/routes/student.route"; 

//load environmental variables
dotenv.config();

const app= express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI as string;

const dbUri = process.env.MONGO_URI; 

if (!dbUri) {
  throw new Error('MONGO_URI is not defined');
}

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors());

//connect to mongoDB
mongoose.connect(dbUri)
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log('Database connection error:', err));


app.use('/students', studentRoutes);

app.listen(PORT, () =>{
    console.log(`Sever running on PORT ${PORT}`);
});
