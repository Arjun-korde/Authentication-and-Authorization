const { AppError } = require('../errors/AppError');

function errorHandler(err, req, res, next) {

    let e = err;
    if (!(err instanceof AppError)) {
        e = new AppError('Internal server error', { status: 500, code: 'INTERNAL_ERROR', isOperational: false });
        // save original error info for logging 
        e.original = { message: err && err.message, stack: err && err.stack }
    }

    const payload = {
        error: e.code,
        message: e.isOperational ? e.message : 'Something went wrong',
        // requestId: req?.id || req?.headers?.['x-request-id'] || undefined
    };

    res.status(e.status).json({ payload });
}

module.exports = { errorHandler };