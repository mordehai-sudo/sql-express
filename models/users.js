import mongoose from "mongoose";
const Schema = mongoose.Schema

export const UserSchema = new Schema({
    name:String,
    email: String
})

export const UsersModel = mongoose.model("users",UserSchema);
