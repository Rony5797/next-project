import RecipeModel from "@/models/recipeModel";
import UserModel from "@/models/userModel";

async function getAllrecipe() {
  try {
    await RecipeModel();
    const allRecipe = await RecipeModel.find();
    return allRecipe;
  } catch (error) {
    console.log(error);
  }
}
async function getRecipeById(id) {
  try {
    await RecipeModel();
    const Recipe = await RecipeModel.findById(id);
    return Recipe;
  } catch (error) {
    console.log(error);
  }
}
async function createUser(user) {
  try {
    await UserModel();
    return await UserModel.create(user);
  } catch (error) {
    console.log(error);
  }
}
async function findUserByCredential(credentials) {
  try {
    await UserModel();
    const user = await UserModel.findOne(credentials).lean();
    return user;
  } catch (error) {
    console.log(error);
  }
}
async function recipeFav(userId, recepeId) {
  try {
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
  } catch (error) {
    console.log(error);
  }
}

export {
  getAllrecipe,
  getRecipeById,
  createUser,
  findUserByCredential,
  recipeFav,
};
