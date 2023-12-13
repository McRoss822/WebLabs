const express = require("express");
const bodyParser = require("body-parser");
const path = require('path'); // Node.js path module
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5050;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// app.use(express.static(path.join(__dirname, 'public')));

const itemRoutes = require("./routes/item_routes.js");

// Add the correct route for your itemRoutes, for example:
app.use('/api', itemRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
