import {Schema, model} from "mongoose";

export type AdminDocument={
    email:string;
    password:string;
    role:"ADMIN";
    createdAt: Date;
};

const adminSchema = new Schema<AdminDocument>(
    {
        email:{type: String, required: true, unique: true},
        password:{type: String, required:  true},
        role: {   type: String, default:"ADMIN"},
    },
    {timestamps: true}
);

export const AdminModel = model<AdminDocument>("Admin", adminSchema);