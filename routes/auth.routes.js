import { Router } from "express";
import rateLimit from "express-rate-limit";

import {
  getCooldownTime,
  resend_sign_up_otp,
  sign_up,
  verify_sign_up_otp,
} from "../controllers/auth.controller.js";

const router = Router();

const signUpRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    message: "Too many sign-up attempts, please try again after 15 minutes",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const verifySignupOtpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    message:
      "Too many OTP verification attempts. Please try again after 15 minutes",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const resendOtpLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 5,
  message: {
    message: "Too many OTP resend attempts. Please try again after 5 minutes",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const cooldownLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: "Too many cooldown requests, try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

// Routes
router.post("/signup", signUpRateLimiter, sign_up);
router.post("/verify-signup-otp", verifySignupOtpLimiter, verify_sign_up_otp);
router.post("/resend-sign-up-otp", resendOtpLimiter, resend_sign_up_otp);
router.post("/get-cooldown-time", cooldownLimiter, getCooldownTime);

export default router;
