import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";
import authRouter from "./routes/auth.routes.js";
import errorHandlerMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(
  cors({
    origin: "https://auth-eight-ashen.vercel.app", // Frontend URL
    credentials: true, // Allows cookies to be sent with requests
  })
);

app.use(express.json());
app.use(cookieParser());
app.set('trust proxy', 1);

// Define your API routes
app.use("/api/auth", authRouter);

// Global error handling middleware
app.use(errorHandlerMiddleware);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
