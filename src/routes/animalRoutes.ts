import express from 'express';
import { getAllAnimals, addAnimal, updateAnimal, deleteAnimal, insertManyAnimals, getAnimalsByDiet, getAnimalsByHabitat, guessAnimalByFunFact, checkAnimalGuess, getAnimalById } from "../controllers/animalController";
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

// removed authMiddleware
router.get('/getall', authMiddleware, getAllAnimals); 
router.get('/get/:id', authMiddleware, getAnimalById);
router.post('/add', authMiddleware, addAnimal); 
router.put('/update/:id', authMiddleware, updateAnimal); 
router.delete('/delete/:id', authMiddleware, deleteAnimal); 
router.post('/addbulk', authMiddleware, insertManyAnimals); 
router.get("/diet/:diet", authMiddleware, getAnimalsByDiet);
router.get("/habitat/:habitat", authMiddleware, getAnimalsByHabitat);
router.get("/game/guess-funfact", authMiddleware, guessAnimalByFunFact); // Get a random fun fact
router.post("/game/check-guess", authMiddleware, checkAnimalGuess); // Check if the guess is correct

export default router;
