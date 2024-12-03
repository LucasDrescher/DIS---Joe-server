const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

// Middleware for at håndtere CORS
app.use(cors());

// Gør alle filer i roden tilgængelige som statiske filer
app.use(express.static(__dirname));

// Middleware til at logge alle HTTP-forespørgsler
app.use((req, res, next) => {
    console.log("----- HTTP Request -----");
    console.log(`Method: ${req.method}`); // HTTP Method
    console.log(`URL: ${req.originalUrl}`); // Requested URL
    console.log("Headers:", req.headers); // Request Headers
    console.log(`IP: ${req.ip}`); // IP Address
    console.log("------------------------");
    next();
});

// Route til at serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Eksempel på en anden route
app.get("/res", (req, res) => {
  res.send("Response message from server");
});

// Start serveren på port 3000
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
