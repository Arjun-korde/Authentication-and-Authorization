const { verifyToken } = require('../utils/token');

function authenticate (req, res, next) {
    const auth = req.headers.authorization;

    if(!auth || !auth.startsWith("Bearer "))
        return res.status(401).json({ message: "missing token" });

    try {
        const token = auth.split(' ')[1];
        const decoded = verifyToken(token);
        req.user = decoded;
        return next();
    } catch(err) {
        return res.status(401).json({message : "Invalid or expired token"});
    }

}

module.exports = { authenticate };