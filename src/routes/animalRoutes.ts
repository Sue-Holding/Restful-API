import express from 'express';
import { getAnimals, addAnimal, updateAnimal, deleteAnimal, insertManyAnimals, getAnimalsByDiet, getAnimalsByHabitat, guessAnimalByFunFact, checkAnimalGuess } from "../controllers/animalController";
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', authMiddleware, getAnimals); 
router.post('/', authMiddleware, addAnimal); 
router.put('/:id', authMiddleware, updateAnimal); 
router.delete('/:id', authMiddleware,deleteAnimal); 
router.post('/bulk', authMiddleware, insertManyAnimals); 
router.get("/diet/:diet", authMiddleware, getAnimalsByDiet);
router.get("/habitat/:habitat", authMiddleware, getAnimalsByHabitat);
router.get("/game/guess-funfact", authMiddleware, guessAnimalByFunFact); // Get a random fun fact
router.post("/game/check-guess", authMiddleware, checkAnimalGuess); // Check if the guess is correct

export default router;
