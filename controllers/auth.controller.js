// import redis from "../utils/redis.js";
// import { generateOTP, sendOTPEmail } from "../services/otpService.js";
// import { generateToken, genUniqueId } from "../utils/jwt.js";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";

// import pool from "../utils/db.js";
// import { AppError } from "../libs/app-error.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const sign_up = async (req, res) => {
  // const { name, email, password } = req.body;

  // if (!email || !name || !password) {
  //   throw new AppError("Missing required fields", 400);
  // }

  // if (!emailRegex.test(email)) {
  //   throw new AppError("Invalid email format", 400);
  // }

  // const existingUser = await pool.query(
  //   `SELECT id FROM "user" WHERE email = $1`,
  //   [email]
  // );

  // if (existingUser.rows.length > 0) {
  //   throw new AppError("Email already taken", 409);
  // }

  // const ttl = await redis.ttl(`temp_user:${email}`);
  // if (ttl > 0) {
  //   throw new AppError("Please wait before resending OTP", 429, true, {
  //     remaining: ttl,
  //   });
  // }

  // const otp = generateOTP();
  // await sendOTPEmail(email, otp);

  // const hashed_password = await bcrypt.hash(password, 10);

  // const tempUser = { name, email, hashed_password, otp };
  // await redis.setex(`temp_user:${email}`, 5 * 60, JSON.stringify(tempUser));
  // await redis.set(`cooldown:${email}`, "1", "EX", 20);

  // const signup_process_token = generateToken({ email }, "10m");

  // res.cookie("signup_process_token", signup_process_token, {
  //   httpOnly: true,
  //   secure: true,
  //   sameSite: "lax",
  //   maxAge: 5 * 60 * 1000,
  // });

  // res.status(200).json({
  //   rem_resend_time: 60,
  //   message: "OTP sent to your email",
  // });

  res.status(200).json({ message: "sign-up route working" });
};

export const verify_sign_up_otp = async (req, res) => {
  // const { otp } = req.body;
  // const token = req.cookies.signup_process_token;

  // if (!otp || !token) {
  //   throw new AppError("Missing required inputs", 400);
  // }

  // const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // const eml = decoded?.email;

  // if (!eml) {
  //   throw new AppError("Invalid token", 400);
  // }

  // const temp_user_raw = await redis.get(`temp_user:${eml}`);
  // if (!temp_user_raw) {
  //   throw new AppError("Sign up session expired or invalid", 400);
  // }

  // const temp_user = JSON.parse(temp_user_raw);

  // const isOtpValid = temp_user.otp === otp;
  // if (!isOtpValid) {
  //   throw new AppError("Invalid OTP", 400);
  // }

  // const { name, email, hashed_password } = temp_user;
  // const client = await pool.connect();
  // const user_id = genUniqueId();

  // try {
  //   await client.query("BEGIN");
  //   await client.query(
  //     `INSERT INTO "user" (id, name, email, email_verified, created_at, updated_at)
  //      VALUES ($1, $2, $3, true, now(), now())`,
  //     [user_id, name, email]
  //   );
  //   await client.query(
  //     `INSERT INTO "account" (id, account_id, provider_id, user_id, password, created_at, updated_at)
  //      VALUES ($1, $2, 'credential', $3, $4, now(), now())`,
  //     [genUniqueId(), genUniqueId(), user_id, hashed_password]
  //   );
  //   await client.query("COMMIT");
  // } catch (error) {
  //   await client.query("ROLLBACK");
  //   throw error;
  // } finally {
  //   client.release();
  // }

  // await redis.del(`cooldown:${email}`);
  // await redis.del(`temp_user:${email}`);

  // res.clearCookie("signup_process_token");

  // res.status(201).json({
  //   message: "User registered successfully",
  // });
  res.status(200).json({ message: "verify sign-up otp route working" });
};

export const resend_sign_up_otp = async (req, res) => {
  // const { token } = req.body;

  // if (!token) {
  //   throw new AppError("Sign up token is required", 400);
  // }

  // const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // const email = decoded?.email;

  // if (!email) {
  //   throw new AppError("Invalid token", 400);
  // }

  // const ttl = await redis.ttl(`cooldown:${email}`);
  // if (ttl > 0) {
  //   throw new AppError(`Try resending OTP after ${ttl} seconds`, 429);
  // }

  // let tempUser = await redis.get(`temp_user:${email}`);
  // if (!tempUser) {
  //   await redis.del(`cooldown:${email}`);
  //   throw new AppError("Sign up session expired", 400);
  // }

  // const newOtp = generateOTP();
  // tempUser = JSON.parse(tempUser);
  // tempUser.otp = newOtp;

  // await redis.setex(`temp_user:${email}`, 5 * 60, JSON.stringify(tempUser));
  // await redis.set(`cooldown:${email}`, "true", "EX", 60);

  // await sendOTPEmail(email, newOtp);

  // res.cookie("signup_process_token", token, {
  //   httpOnly: true,
  //   secure: true,
  //   sameSite: "lax",
  //   maxAge: 5 * 60 * 1000,
  // });

  // res.status(200).json({
  //   message: "OTP resent for sign-up",
  //   remResendTime: 60,
  // });
  res.status(200).json({ message: "resent sign-up otp route working" });
};

export const getCooldownTime = async (req, res) => {
  // const { token } = req.body;

  // if (!token) {
  //   throw new AppError("Token is required", 400);
  // }

  // const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // const email = decoded?.email;

  // if (!email) {
  //   throw new AppError("Invalid token", 400);
  // }

  // const ttl = await redis.ttl(`cooldown:${email}`);

  // res.status(200).json({
  //   remResendTime: ttl > 0 ? ttl : 0,
  // });
  res.status(200).json({ message: "get cooldown time route working" });
};
