const express = require("express");
const cors = require("cors"); 
const mongoose = require("mongoose");
const app = express();

require("dotenv").config(); 
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
mongoose
    .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
    .then(() => console.log(`Database connected successfully`))
    .catch((err) => console.log(err));


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${port}...`);
});
