const User = require('../models/User');

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        res.status(500).send('Server error');
    }
};
