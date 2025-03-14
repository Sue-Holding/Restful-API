import express from 'express';
import { getAnimals, addAnimal, updateAnimal, deleteAnimal, insertManyAnimals, getAnimalsByDiet, getAnimalsByHabitat, guessAnimalByFunFact, checkAnimalGuess } from "../controllers/animalController";

const router = express.Router();

router.get('/', getAnimals); 
router.post('/', addAnimal); 
router.put('/:id', updateAnimal); 
router.delete('/:id', deleteAnimal); 
router.post('/bulk', insertManyAnimals); 
router.get("/diet/:diet", getAnimalsByDiet);
router.get("/habitat/:habitat", getAnimalsByHabitat);
router.get("/game/guess-funfact", guessAnimalByFunFact); // Get a random fun fact
router.post("/game/check-guess", checkAnimalGuess); // Check if the guess is correct

export default router;
