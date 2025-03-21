"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertManyAnimals = exports.deleteAnimal = exports.updateAnimal = exports.addAnimal = exports.getAnimals = void 0;
var animalModel_1 = __importDefault(require("../models/animalModel"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var getAnimals = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var animals, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, animalModel_1.default.find()];
            case 1:
                animals = _a.sent();
                res.json(animals);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                if (err_1 instanceof Error) {
                    res.status(500).json({ message: "Server Error", error: err_1.message });
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAnimals = getAnimals;
var addAnimal = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newAnimal, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                newAnimal = new animalModel_1.default(req.body);
                return [4 /*yield*/, newAnimal.save()];
            case 1:
                _a.sent();
                res.status(201).json(newAnimal);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                if (err_2 instanceof Error) {
                    res.status(500).json({ message: "Failed to create animal", error: err_2.message });
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addAnimal = addAnimal;
var updateAnimal = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedAnimal, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, animalModel_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true })];
            case 1:
                updatedAnimal = _a.sent();
                res.json(updatedAnimal);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                if (err_3 instanceof Error) {
                    res.status(500).json({ message: "Failed to update animal", error: err_3.message });
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateAnimal = updateAnimal;
var deleteAnimal = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, animalModel_1.default.findByIdAndDelete(req.params.id)];
            case 1:
                _a.sent();
                res.json({ message: "Animal deleted" });
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                if (err_4 instanceof Error) {
                    res.status(500).json({ message: "Failed to delete animal", error: err_4.message });
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteAnimal = deleteAnimal;
var insertManyAnimals = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var animals, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, animalModel_1.default.insertMany(req.body)];
            case 1:
                animals = _a.sent();
                res.status(201).json({ message: "Animals inserted successfully", animals: animals });
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                if (err_5 instanceof Error) {
                    res.status(500).json({ message: "Failed to insert animals", error: err_5.message });
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.insertManyAnimals = insertManyAnimals;
module.exports = { getAnimals: exports.getAnimals, addAnimal: exports.addAnimal, updateAnimal: exports.updateAnimal, deleteAnimal: exports.deleteAnimal, insertManyAnimals: exports.insertManyAnimals };
