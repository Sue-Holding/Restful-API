import { Request, Response } from "express";
import session from "express-session";
import { User } from "../models/userModel";
import dotenv from "dotenv";

dotenv.config();

declare module "express-session" {
    interface SessionData {
      name?: string;
    }
  }

// create user function (just saves the name)
export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name } = req.body;
  
      if (!name) {
        res.status(400).json({ message: "Name is required" });
        return;
      }
  
      // Save user in DB
      const newUser = new User({ name });
      await newUser.save();
  
      res.status(201).json({ message: `Welcome, ${name}! Let's learn about animals!`, user: newUser });
    } catch (err) {
      res.status(500).json({ message: "Server error", error: (err as Error).message });
    }
  };

// Login function (just saves the name)
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;

    if (!name) {
      res.status(400).json({ message: "Name is required" });
      return;
    }

    // Check if session is available
    if (!req.session) {
        res.status(500).json({ message: "Session is not available" });
        return;
      }

    req.session.name = name; // Store user in session

    res.status(201).json({ message: `Welcome, ${name}! Let's learn about animals!` });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: (err as Error).message });
  }
};

export const logoutUser = async (req: Request, res: Response): Promise<void> => {
    try {
    //   if (req.session) {
        if (req.session && req.session.name) {
            const userName = req.session.name;

        req.session.destroy((err) => {
          if (err) {
            res.status(500).json({ message: "Logout failed", error: err.message });
            return;
          }
          res.status(200).json({ message: ` ${userName} Logged out successfully ` });
        });
      } else {
        res.status(400).json({ message: "No active session found" });
      }
    } catch (err) {
      res.status(500).json({ message: "Server error", error: (err as Error).message });
    }
  };


module.exports = { createUser, loginUser, logoutUser };