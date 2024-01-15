class ApiError extends Error {
    constructor(
        message = 'Internal Server Error',
        status = 500,
        errors = [],
        stack = ''
    ) {
        super(message);
        this.message = message;
        this.status = status;
        this.errors = errors;
        this.data = null;
        this.suceess = false;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError;