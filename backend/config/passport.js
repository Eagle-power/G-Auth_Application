import passport from "passport";
import dotenv from "dotenv";

import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import  User from "../models/User.model.js";

dotenv.config();

passport.use(new GoogleStrategy.Strategy({
    clientID : process.env.CLIENT_ID,
    clientSecret : process.env.CLIENT_SECRET,

    callbackURL : "/auth/google/callback"

},async(accessToken , refreshToken , profile , done)=>{
    try {
        let user = await User.findOne({googleId: profile.id})
        
        if(!user){
            user = await User.create({
                googleId : profile.id,
                displayName : profile.displayName,
                email : profile.emails[0].value,
                profilePicture : profile.photos[0].value
            });
        }
        return  done(null , user);

    } catch (error) {
        return done(error,null);
    }
}))

passport.serializeUser((user, done)=>{
    return done(null  , user.id);
});

passport.deserializeUser(async(id, done)=>{
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error ,null);
    }
});

export default passport;