import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  
  description: String,
  habitat: String,
  diet: String,
  funFact: String,
});

const Animal = mongoose.model('Animal', animalSchema);

export default Animal;
