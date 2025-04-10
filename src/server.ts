import express, { Express, Request, Response } from 'express';
import session from 'express-session';
import cors from 'cors';
import { connectDB } from './database/db';
import dotenv from 'dotenv';
import userRoutes from "./routes/userRoutes";
import animalRoutes from './routes/animalRoutes';

dotenv.config();
connectDB();

// Create the Express app
const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middlewares
// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true
// }));


const allowedOrigins = [
  'http://localhost:5173',
  'https://restful-api-animals.onrender.com'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));




app.use(express.urlencoded({extended: true}));

app.use(express.json()); // ✅ Middleware to parse JSON body

const isProduction = process.env.NODE_ENV === 'production';
app.use(
  session({
    secret: process.env.SESSION_SECRET || "fallbackSecret",
    resave: false,
    saveUninitialized: true,
    cookie: { 
      secure: isProduction,  // must be true in production (HTTPS)
      sameSite: isProduction ? 'none' : 'lax' // 'none' for cross-origin HTTPS
      // secure: false  // Set to true if using HTTPS
    }, 
  })
);

// Test endpoint
app.get('/', (req: Request, res:Response) => {
    res.send("This is sue's backend application");
});

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use('/api/animals', animalRoutes);


// Start server
app.listen(PORT, () => {
    console.log(`Application is running at http://localhost:${PORT}`);
});

export default app;