"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var animalController_1 = require("../controllers/animalController");
// import * as animalControllers from '../controllers/animalController';
// const { 
//     getAnimalsFromAPI,
//     addAnimal,
//     updateAnimal,
//     deleteAnimal,
// } = animalControllers;
var router = express_1.default.Router();
router.get('/', animalController_1.getAnimals); // ✅ GET /api/animals
router.post('/', animalController_1.addAnimal); // ✅ POST /api/animals
router.put('/:id', animalController_1.updateAnimal); // ✅ PUT /api/animals/:id
router.delete('/:id', animalController_1.deleteAnimal); // ✅ DELETE /api/animals/:id
router.post('/bulk', animalController_1.insertManyAnimals); // ✅ POST /api/animals/bulk
exports.default = router;
