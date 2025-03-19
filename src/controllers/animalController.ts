import { Request, Response } from "express";
import Animal from '../models/animalModel';
import dotenv from "dotenv";

dotenv.config();

export const getAllAnimals = async (req: Request, res: Response) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: "Server Error", error: err.message });
    }
  }
};

export const getAnimalById = async (req: Request, res: Response) => {
  try {
    const animal = await Animal.findById(req.params.id);

    if (!animal) {
      res.status(404).json({ message: `No animal found with this ID: ${req.params.id}` });
      return;
    }

    res.json(animal);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: "Server Error", error: err.message });
    }
  }
};


export const addAnimal = async (req: Request, res: Response) => {
  try {
    const newAnimal = new Animal(req.body);
    await newAnimal.save();
    res.status(201).json(newAnimal);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: "Failed to create animal", error: err.message });
    }
  }
};

export const updateAnimal = async (req: Request, res: Response) => {
  try {
    const updatedAnimal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedAnimal);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: "Failed to update animal", error: err.message });
    }
  }
};

export const deleteAnimal = async (req: Request, res: Response) => {
  try {
    await Animal.findByIdAndDelete(req.params.id);
    res.json({ message: "Animal deleted" });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: "Failed to delete animal", error: err.message });
    }
  }
};

export const insertManyAnimals = async (req: Request, res: Response) => {
  try {
    const animals = await Animal.insertMany(req.body);
    res.status(201).json({ message: "Animals inserted successfully", animals });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: "Failed to insert animals", error: err.message });
    }
  }
};

export const getAnimalsByDiet = async (req: Request, res: Response) => {
  try {
    const { diet } = req.params; // e.g., "herbivore"
    const animals = await Animal.find({ diet: { $regex: new RegExp(diet, "i") } });

    if (animals.length === 0) {
      res.status(404).json({ message: `No animals found for diet: ${diet}` });
      return;
    }

    res.json(animals);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }
};

export const getAnimalsByHabitat = async (req: Request, res: Response) => {
  try {
    const { habitat } = req.params;
    const animals = await Animal.find({ habitat: { $regex: new RegExp(habitat, "i") } });

    if (animals.length === 0) {
      res.status(404).json({ message: `No animals found in habitat: ${habitat}` });
      return;
    }

    res.json(animals);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }
};

export const guessAnimalByFunFact = async (req: Request, res: Response) => {
  try {
    const animals = await Animal.find({ funFact: { $exists: true, $ne: "" } });

    if (animals.length === 0) {
      res.status(404).json({ message: "No animals with fun facts found" });
      return;
    }

    // Pick a random animal
    const randomIndex = Math.floor(Math.random() * animals.length);
    const selectedAnimal = animals[randomIndex];

    res.json({
      game: "Guess the Animal!",
      funFact: selectedAnimal.funFact,
      message: "Can you guess which animal this fun fact belongs to?"
    });

  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }
};

export const checkAnimalGuess = async (req: Request, res: Response) => {
  try {
    const { guess, funFact } = req.body; // User submits their guess with the fun fact

    if (!guess || !funFact) {
      res.status(400).json({ message: "Both guess and funFact are required" });
      return;
    }

    // Find the animal with this fun fact
    const animal = await Animal.findOne({ funFact: { $regex: new RegExp(funFact, "i") } });

    if (!animal) {
      res.status(404).json({ message: "No matching animal found for this fun fact" });
      return;
    }

    // Check if the user's guess matches
    const isCorrect = animal.name.toLowerCase() === guess.toLowerCase();

    res.json({
      correct: isCorrect,
      message: isCorrect ? `🎉 Correct! It's a ${animal.name}!` : `❌ Oops! The correct answer is ${animal.name}.`
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }
};

module.exports = { getAllAnimals, getAnimalById, addAnimal, updateAnimal, deleteAnimal, insertManyAnimals, getAnimalsByDiet, getAnimalsByHabitat, guessAnimalByFunFact, checkAnimalGuess };