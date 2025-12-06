const jwt = require('jsonwebtoken');
const { ACCESS_SECRET, TOKEN_EXPIRES_IN } = require('../config/secrets');

function signAccessToken(user) {
    return jwt.sign(
        { uid: user.id, username: user.username, roles: user.roles },
        ACCESS_SECRET,
        { expiresIn: TOKEN_EXPIRES_IN }
    );
}

function verifyToken(token) {
    return jwt.verify(token, ACCESS_SECRET);
}

module.exports = { signAccessToken, verifyToken };