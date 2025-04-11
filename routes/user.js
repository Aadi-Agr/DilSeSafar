const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const usercontroller = require("../controllers/user.js");

router
  .route("/signup")
  .get(usercontroller.rendersignUpForm)
  .post(wrapAsync(usercontroller.signup));

router
  .route("/login")
  .get(usercontroller.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    usercontroller.login
  );

router.get("/logout", usercontroller.logout);

module.exports = router;

// // Google OAuth routes
// router.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/login" }),
//   (req, res) => {
//     req.flash("success", "Welcome to Wanderlust via Google!");
//     res.redirect("/listings");
//   }
// );
