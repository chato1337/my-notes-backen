const express = require("express");
const config = require("./config");
const bodyParser = require("body-parser");
const routesNotes = require("./components/notes/network");
const routesUsers = require("./components/users/network")
const cors = require("cors");
const app = express();
const router = require('./network/routes')

app.use(cors());

app.use(bodyParser.json());
app.use(routesNotes);
app.use(routesUsers)

//server on
app.listen(config.port, () => {
	console.log(`escuchando en el puerto ${config.host}:${config.port}`);
});
