import RecipeModel from "@/models/recipeModel";
import UserModel from "@/models/userModel";
import mongoose from "mongoose";

async function getAllrecipe() {
  await RecipeModel();
  const allRecipe = await RecipeModel.find();
  return allRecipe;
}
async function getRecipeById(id) {
  await RecipeModel();
  const Recipe = await RecipeModel.findById(id);
  return Recipe;
}
async function createUser(user) {
  await UserModel();
  return await UserModel.create(user);
}
async function findUserByCredential(credentials) {
  await UserModel();
  const user = await UserModel.findOne(credentials).lean();
  return user;
}
async function recipeFav(userId, recepeId) {
  await UserModel();
  const userFav = await UserModel.findById(userId);
  if (userFav) {
    const foundRecipe = userFav.favourites.find(
      (id) => id.toString() === recepeId
    );

    if (foundRecipe) {
      userFav.favourites.pull(recepeId);
    } else {
      userFav.favourites.push(recepeId);
    }

    userFav.save();
  }
}

export {
  getAllrecipe,
  getRecipeById,
  createUser,
  findUserByCredential,
  recipeFav,
};
