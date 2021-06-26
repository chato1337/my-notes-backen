module.exports = {
	port: process.env.PORT || 3001,
	host: process.env.HOST || "http://localhost",
	dbUri:
		"mongodb+srv://adminNotes:Z5n4vUqdTRLda3Fp@cluster0.q5dkp.mongodb.net/my-notes-park?retryWrites=true&w=majority",
	//user admin
	username: "lalo",
	password: "landa",
	email: "me@me.com",
	secret: "my-notes-back",
};
