const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const wineRoutes = require("./api/wines");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/wines", wineRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
