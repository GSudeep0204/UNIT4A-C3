const express = require("express");

const app = express();

app.use(express.json());

const usercontroller = require("./controllers/user.controller")
const commentcontroller = require("./controllers/comment.controller")
const bookcontroller = require("./controllers/book.controller")
const publicationcontroller = require("./controllers/publication.controller");

app.use("/users",usercontroller)
app.use("/commnet",commentcontroller)
app.use("/books",bookcontroller)
app.use("/publications",publicationcontroller)


module.exports = app;