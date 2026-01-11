import { AdminModel } from "./auth.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../../config/env";

const SALT_ROUNDS = 10;

export const registerAdmin = async (email: string, password: string)=>{
    const existing = await AdminModel.findOne({email});
    if(existing){
        throw new Error("Admin already exists");
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const admin = await AdminModel.create({
        email,
        password: hashedPassword
    });

    return admin;
}

export const loginAdmin = async(email:string, password: string)=>{
    const admin = await AdminModel.findOne({email});

    if(!admin){
        throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password,admin.password);
    if(!isMatch){
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
        {adminId: admin._id,   role:  admin.role},
        env.JWT_SECRET,
        {expiresIn : "1h"}
    );

    console.log("token is", token);
    return { token };
}