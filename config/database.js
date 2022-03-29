const db = require("mongoose");
require('dotenv').config()

const uri = process.env.DATABASE_URL

db.Promise = global.Promise;

db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log(`base de datos conectada con exito`))
	.catch((err) => console.error(`error al conectar la base de datos: ${err}`));
