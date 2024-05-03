import mongoose, { Schema } from "mongoose";

const RecipeSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
    },
    activeTime: {
      type: String,
    },
    totalTime: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
    },
    serves: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    steps: {
      type: Array,
    },
  },
  { versionKey: false, timestamps: true }
);

// Check if the model is already defined before defining it
const RecipeModel = mongoose.models.recipes || mongoose.model("recipes", RecipeSchema);

export default RecipeModel;
