class AppError extends Error {
  constructor(message, statusCode = 500, isOperational = true, details) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
