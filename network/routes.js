//aqui se hace un redireccionador para simplificar el uso del archivo raiz
const express = require("express")
const app = express()

const noteRoutes = require("../components/notes/network")

app.use(noteRoutes)