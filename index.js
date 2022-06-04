import express from 'express'
import { NoteUtils } from './utils/noteUtils';
const config = require("./config");
const bodyParser = require("body-parser");
const routesNotes = require("./components/notes/network");
const routesUsers = require("./components/users/network")
const routesBills = require("./components/bills/network")
const cors = require("cors");
const app = express();
const router = require('./network/routes')
const passport = require('passport')
import { router as routesShop } from "./components/shop/network"
import { router as routesProfile } from "./components/profile/network"

NoteUtils.testTypescritp()

app.use(cors());

app.use(passport.initialize())
require('./utils/auth')

app.use(bodyParser.json());
app.use(routesNotes);
app.use(routesUsers)
app.use(routesBills)
app.use(routesShop)
app.use(routesProfile)

//server on
app.listen(config.port, () => {
	console.log(`escuchando en el puerto ${config.host}:${config.port}`);
});
