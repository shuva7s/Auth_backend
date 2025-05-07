import AppError from "../libs/app.error.js";
export default function errorHandlerMiddleware(err, req, res, next) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
      ...(err.details && { details: err.details }),
    });
  }

  return res.status(500).json({
    message: err.message || "Internal server error.",
  });
}
