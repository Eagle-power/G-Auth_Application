import express from 'express';
import passport from 'passport';

const router = express.Router();

// Initiate Google OAuth
router.get('/google', passport.authenticate("google", { scope: ["profile", "email"] }));

// Google OAuth callback
router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
        console.log("✅ Google Auth Success:", req.user);
        res.redirect("http://localhost:5173");
    }
);

// Logout route
router.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.redirect("http://localhost:5173/home");
    });
});

// Return current user
router.get("/user", (req, res) => {
    res.json(req.user || null);
});

export default router;
