import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  
  diet: String,
  location: String,
  funFact: String,
});

const Animal = mongoose.model('Animal', animalSchema);

export default Animal;
