import express, { Express, Request, Response } from 'express';
import session from 'express-session';
import cors from 'cors';
import { connectDB } from './database/db';
import dotenv from 'dotenv';
import userRoutes from "./routes/userRoutes";
import animalRoutes from './routes/animalRoutes';
import { authMiddleware } from './middleware/authMiddleware';

dotenv.config();
connectDB();

// Create the Express app
const app: Express = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

// Middlewares
app.use(cors({
  origin: ['http://localhost:5173', 'https://restful-api-animals.onrender.com'],
  credentials: true
}));
// app.use(cors({
//   origin: (origin, callback) => {
//     const allowedOrigins = [
//       'http://localhost:5173',
//       'https://restful-api-animals.onrender.com'
//     ];
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true // disable whilst no login function
// }));

//body parsers
app.use(express.urlencoded({extended: true}));
app.use(express.json()); // ✅ Middleware to parse JSON body

// session middleware
app.use(session({
    secret: process.env.SESSION_SECRET || "fallbackSecret",
    resave: false,
    saveUninitialized: false,
    cookie: { 
      secure: isProduction, // true only in production (HTTPS)
    sameSite: isProduction ? 'none' : 'lax', 
      // secure: process.env.NODE_ENV === 'production',
      // sameSite: 'none',
      httpOnly: true,
    }, 
  }));

// endpoints / routes
app.get('/', (req: Request, res:Response) => {
    res.send("This is sue's backend application");
});

app.use("/api/users", userRoutes);
app.use('/api/animals', animalRoutes);


// Start server
app.listen(PORT, () => {
    console.log(`Application is running at http://localhost:${PORT}`);
});

export default app;