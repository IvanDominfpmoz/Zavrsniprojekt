const express = require("express");
const bodyParser = require("body-parser");// parsira odnosno rasclanjuje podatke iz body requestova u json format
const cors = require("cors");

const app = express();

//Middleware koji zapravo sluzi za definiranje ruta i pokretanje servera
//ovo su sve extenzije koje se koriste ne vide se u radu ali su bitne, kao npr CORS koji licencira Cors policy
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//uzima auth.js i posts.js 
const posts = require("./routes/api/posts");
const auth = require("./routes/api/auth");

app.use("/api/posts", posts);
app.use("/api/auth", auth);

const port = process.env.PORT || 5000;
//pokretanje servera app.listen
app.listen(port, () => console.log(`Server started on port ${port}`));

