import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    fname: {
      type: String,
    },
    lname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    favourites: {
      type: Array,
    },
  },
  { versionKey: false, timestamps: true }
);

// Check if the model is already defined before defining it
const UserModel = mongoose.models.users || mongoose.model("users", UserSchema);

export default UserModel;
