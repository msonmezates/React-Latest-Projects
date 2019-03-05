const Authentiation = require('./controllers/authentication');

module.exports = function(app) {
	app.post('/signup', Authentiation.signup);
};
