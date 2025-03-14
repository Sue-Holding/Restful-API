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
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use(express.json()); // ✅ Middleware to parse JSON body

app.use(
  session({
    secret: "supersecret", // Change this in production
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
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