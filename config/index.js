require('dotenv').config()
require('./database')

module.exports = {
	port: process.env.PORT || 3001,
	host: process.env.HOST || "http://localhost",
	dbUri: process.env.DATABASE_URL,
	//user admin
	username: "lalo",
	password: "landa",
	email: "me@me.com",
	secret: process.env.SECRET_TOKEN || "my-notes-back",
	apiKey: process.env.API_KEY || 'no-key'
};
