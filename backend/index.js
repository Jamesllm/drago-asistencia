const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

const port = process.env.API_PORT || 3031;
const ip_port = process.env.IP_PORT;

// Habilitar CORS usando el middleware cors
app.use(cors());

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.use(require("./routes/index"));

app.listen(port);
console.log(`

 _______  _______  ___     _______  _______  _______  _______ 
|   _   ||       ||   |   |       ||       ||       ||       |
|  |_|  ||    _  ||   |   |_     _||    ___||  _____||_     _|
|       ||   |_| ||   |     |   |  |   |___ | |_____   |   |  
|       ||    ___||   |     |   |  |    ___||_____  |  |   |  
|   _   ||   |    |   |     |   |  |   |___  _____| |  |   |  
|__| |__||___|    |___|     |___|  |_______||_______|  |___|  

                                                  
Server started on port http://${ip_port}:${port}

- Write rs | Restart Server
`);
