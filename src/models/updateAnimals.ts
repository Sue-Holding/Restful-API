import mongoose from "mongoose";
import Animal from "./animalModel";  
import dotenv from "dotenv";

dotenv.config();

const updateAnimals = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);

    const updates = [
        { name: "Lion", habitat: "Grassland" },
        { name: "Elephant", habitat: "Forest" },
        { name: "Giraffe", habitat: "Grassland" },
        { name: "Panda", habitat: "Forest" },
        { name: "Kangaroo", habitat: "Grassland" },
        { name: "Penguin", habitat: "Ice and Snow" },
        { name: "Turtle", habitat: "Water" },
        { name: "Monkey", habitat: "Jungle" },
        { name: "Dolphin", habitat: "Ocean" },
        { name: "Zebra", habitat: "Grassland" },
        { name: "Owl", habitat: "Forest" },
        { name: "Rabbit", habitat: "Meadow" },
      ];

    for (const update of updates) {
      await Animal.updateOne({ name: update.name }, { habitat: update.habitat });
    }

    console.log("Animals updated with habitat successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error updating animals:", error);
    mongoose.connection.close();
  }
};

updateAnimals();
