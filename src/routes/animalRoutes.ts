import express from 'express';
import { getAllAnimals, addAnimal, updateAnimal, deleteAnimal, insertManyAnimals, getAnimalsByDiet, getAnimalsByHabitat, guessAnimalByFunFact, checkAnimalGuess, getAnimalById } from "../controllers/animalController";
// import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

// removed authMiddleware
router.get('/getall', getAllAnimals); 
router.get('/get/:id', getAnimalById);
router.post('/add', addAnimal); 
router.put('/update/:id', updateAnimal); 
router.delete('/delete/:id', deleteAnimal); 
router.post('/addbulk', insertManyAnimals); 
router.get("/diet/:diet", getAnimalsByDiet);
router.get("/habitat/:habitat", getAnimalsByHabitat);
router.get("/game/guess-funfact", guessAnimalByFunFact); // Get a random fun fact
router.post("/game/check-guess", checkAnimalGuess); // Check if the guess is correct

export default router;
