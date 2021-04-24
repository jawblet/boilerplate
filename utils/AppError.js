class AppError extends Error {
    constructor(message, code) {
    super(message) // bult-in param for Error object 
        this.code = code;

        //detect HTTP status code by first digit of error code 
        this.status = code.toString().startsWith('4') ? 'fail' : 'error'; 
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;