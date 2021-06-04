import express, { request } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io"
import path from "path";

import "./database";
import { routes } from "./routes";

const app = express();


app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
    return response.render("html/client");
});

app.get("/pages/admin", (request, response) => {
    return response.render("html/admin");
});



const http = createServer(app);           //Criando protocolo http
const io = new Server(http);              //Criando protocolo WS

io.on("connection", (socket: Socket) => {
   
});



app.use(express.json());

app.use(routes);

export { http , io }