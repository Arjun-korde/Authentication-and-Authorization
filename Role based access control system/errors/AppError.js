
class AppError extends Error {
    constructor(
        message,
        { status = 500, code = 'INTERNAL_ERROR', details = null, isOperational = true } = {}
    ) {
        super(message);
        this.name = this.constructor.name;
        this.status = status;   // HTTP status
        this.code = code;       // stable machine code for clients/logs
        this.details = details; // Extra content(e.g. Validation Errors ...etc)
    }
}

class BadRequestError extends AppError {
    constructor(message = 'Bad Request', details) {
        super(message, { status: 400, code: 'BAD_REQUEST', details });
    }
}

class UnauthorizedError extends AppError {
    constructor(message = 'Unauthorized') {
        super(message, { status: 401, code: 'UNAUTHORIZED' });
    }
}

class ForbiddenError extends AppError {
    constructor(message = 'Forbidden') {
        super(message, { status: 403, code: 'FORBIDDEN' });
    }
}

class NotFoundError extends AppError {
    constructor(message = 'Not Found') {
        super(message, { status: 404, code: 'NOT_FOUND', details });
    }
}

class ValidationError extends AppError {
    constructor(message = 'Validation Error', details = []) {
        super(message, { status: 400, code: 'VALIDATION_ERROR', details });
    }
}

module.exports = { AppError, BadRequestError, ForbiddenError, NotFoundError, UnauthorizedError, ValidationError };