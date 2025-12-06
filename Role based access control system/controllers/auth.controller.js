const { users } = require('../data/users');
const { signAccessToken } = require('../utils/token');

exports.login = (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username == username && u.password == password);

    if(!user) return res.status(401).json({message : "Invalid credentials"});

    const token = signAccessToken(user);

    res.json({
        message: "Login successful",
        accessToken: token,
        user: {
            id: user.id,
            username: user.username,
            roles: user.roles
        }
    });
}