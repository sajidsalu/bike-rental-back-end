import { NextFunction, Request, Response } from "express";
import { loginAdmin, registerAdmin } from "./auth.service";

export const register = async(
    req: Request,
    res: Response,
    next: NextFunction
)=>{
    try{
        const {email, password}= req.body;
        const admin = await registerAdmin(email,  password);
        res.status(201).json({id:admin._id,email: admin.email});
    }catch(err){
        next(err);
    }
};

export const login = async(
    req: Request,
    res: Response,
    next: NextFunction
)=>{
    try{
        const {email, password} = req.body;
        const result = await loginAdmin(email,password);
        res.json(result);
    }catch(err){
        next(err);
    }
}