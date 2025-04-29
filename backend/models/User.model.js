import mongoose  from "mongoose";

const UserSchema = new mongoose.Schema({

    googleId: String,
    displayName : String,
    email : String,
    profilePicture : String,

});

const User = mongoose.model("User" , UserSchema);
export default  User;
