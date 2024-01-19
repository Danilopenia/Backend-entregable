import express from "express"
import __dirname from "./utils.js"
import morgan from "morgan"
import { engine } from "express-handlebars"

import router from "./src/routers/index.router.js"
import pathHandler from "./src/middlewares/pathHandler.mid.js"
import errorHandler from "./src/middlewares/errorHandler.mid.js"


const server = express()
const PORT = 8080
const ready = ()=>console.log("server ready on port" + PORT);
server.listen(PORT, ready)


server.engine("handlebars", engine())
server.set("view engine", "handlebars")
server.set("views", __dirname+"/src/views")


server.use(express.json())
server.use(express.urlencoded({ extended: true}))
server.use(express.static(__dirname+"/public"))
server.use(morgan("dev"))

//routers
//enrutadores
//catch de error
server.use("/", router);
server.use(errorHandler);
server.use(pathHandler);
