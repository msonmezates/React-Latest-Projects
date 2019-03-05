const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const config = require('../config');
const User = require('../models/user');

// Create local strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
	User.findOne({ email }, (err, user) => {
		if (err) {
			return done(err);
		}
		if (!user) {
			done(null, false);
		}
		// compare passwords
		user.comparePassword(password, function(err, isMatch) {
			if (err) {
				return done(err);
			}
			if (!isMatch) {
				return done(null, false);
			}
			return done(null, user);
		});
	});
});

// Setup options for JWT Strategy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
	User.findById(payload.sub, (err, user) => {
		if (err) {
			return done(err, false);
		}
		if (user) {
			done(null, user);
		} else {
			done(null, false);
		}
	});
});

// Tell passport to use the strategy
passport.use(jwtLogin);
passport.use(localLogin);
