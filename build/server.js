"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_session_1 = __importDefault(require("express-session"));
var cors_1 = __importDefault(require("cors"));
var db_1 = require("./database/db");
var dotenv_1 = __importDefault(require("dotenv"));
var animalRoutes_1 = __importDefault(require("./routes/animalRoutes"));
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
// import app from "./app";
dotenv_1.default.config();
(0, db_1.connectDB)();
// Create the Express app
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json()); // ✅ Middleware to parse JSON body
app.use((0, express_session_1.default)({
    secret: "supersecret", // Change this in production
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
}));
// Test endpoint
app.get('/', function (req, res) {
    res.send("This is sue's backend application");
});
// Routes
app.use('/api/animals', animalRoutes_1.default);
app.use("/api/users", userRoutes_1.default);
// Start server
app.listen(PORT, function () {
    console.log("Application is running at http://localhost:".concat(PORT));
});
exports.default = app;
