"use server";
import { revalidatePath } from "next/cache";
import { createUser, findUserByCredential, recipeFav } from "@/db/queries";

const { redirect } = require("next/navigation");

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const created = await createUser(user);
  redirect("/login");
}

async function performLogin(formData) {
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");
    const found = await findUserByCredential(credential);
    return found;
  } catch (error) {
    throw error;
  }
}
async function addFav(userId, recepeId) {
  try {
    await recipeFav(userId, recepeId);
  } catch (error) {
    throw error;
  }
  revalidatePath(`/details/${recepeId}`);
}

export { registerUser, performLogin, addFav };
