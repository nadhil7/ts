import type { Request, Response } from "express";
import { User } from "../schema/user.js";

export class UserController {
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const users = await User.find();
            res.status(200).json({ message: "Users fetched successfully", users, success: true });
        } catch (err) {
            res.status(500).json({ message: "Error fetching users", error: err, success: false });
        }
    }

    async add(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, age } = req.body;
            const newUser = new User({ name, email, age });
            await newUser.save();
            res.status(201).json({ message: "User added successfully", user: newUser, success: true });
        } catch (err) {
            res.status(500).json({ message: "Error adding user", error: err, success: false });
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { name, email, age } = req.body;
            const updatedUser = await User.findByIdAndUpdate(
                id,
                { name, email, age },
                { new: true }
            );
            res.status(200).json({ message: "User updated successfully", user: updatedUser, success: true });
        } catch (err) {
            res.status(500).json({ message: "Error updating user", error: err, success: false });
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await User.findByIdAndDelete(id);
            res.status(200).json({ message: "User deleted successfully", success: true });
        } catch (err) {
            res.status(500).json({ message: "Error deleting user", error: err, success: false });
        }
    }
}
