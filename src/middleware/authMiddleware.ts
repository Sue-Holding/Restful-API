// import { Request, Response, NextFunction } from "express";

// export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   if (req.session && req.session.name) {
//     next(); // User is authenticated, continue to the route
//   } else {
//     res.status(401).json({ message: "Unauthorized. Please log in first." });
//   }
// };