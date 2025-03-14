"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get("/test", function (req, res) {
    res.status(200).json({ message: "Hello, world!" });
});
// Start Server (Only when running directly, not during testing)
if (process.env.NODE_ENV !== "test") {
    app.listen(port, function () {
        console.log("Server running on port ".concat(port));
    });
}
exports.default = app;
