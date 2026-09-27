const User = require('../models/User');

exports.searchUsers = async (req, res) => {
    try {
        const query = req.query.q;
        const users = await User.find({ name: new RegExp(query, 'i') });
        res.json(users);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
