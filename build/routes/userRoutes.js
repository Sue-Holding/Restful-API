"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userController_1 = require("../controllers/userController");
var router = express_1.default.Router();
router.post("/login", userController_1.loginUser);
router.post("/logout", userController_1.logoutUser);
exports.default = router;
