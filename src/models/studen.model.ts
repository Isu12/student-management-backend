import mongoose, { Schema, Document } from 'mongoose';

interface IStudent extends Document {
    nic:string;
    firstName: string;
    LastName: string;
    age: number;
    mobile: string;
    email: string;
    schoolName: string;
}

const StudentSchema = new Schema<IStudent>({
    nic: { type: String, required: true , unique: true},
    firstName: { type: String, required: true },
    LastName: { type: String, required: true },
    age: { type: Number, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    schoolName: { type: String, required: true }


});

export default mongoose.model<IStudent>('Student', StudentSchema);



