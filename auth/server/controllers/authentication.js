const jwt = require('jwt-simple');

const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
	const timestamp = new Date().getTime();
	const token = jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
	return token;
}

exports.signin = function(req, res, next) {
	// assign a token to the user
	res.send({ token: tokenForUser(req.user) });
};

exports.signup = function(req, res, next) {
	const { email, password } = req.body;
	// Check to see if a user with the given email exists
	User.findOne({ email }, (err, existingUser) => {
		if (err) {
			return next(err);
		} else if (existingUser) {
			return res.status(422).send({ error: 'Email is in use' });
		}
		// If no user exists
		const user = new User({ email, password });
		user.save((err, newUser) => {
			if (err) {
				return next(err);
			}
			res.json({ token: tokenForUser(user) });
		});
	});
};
