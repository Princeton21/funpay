const express = require("express");
const cors = require("cors"); 
const mongoose = require("mongoose");
const app = express();

require("dotenv").config(); 
const port = process.env.PORT || 5000;

const EntryModel = require("./models/Entry");

app.use(express.json());
app.use(cors());

app.post("/insert", async (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const entry = new EntryModel({ 
    entryTitle: title,
    entryPrice: price, 
  });
 try {
    await entry.save();
    res.send("Entry has been saved to the database");
  } catch (err) {
    console.log(err);
  }
});

app.get("/read", async (req, res) => {
  EntryModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  // res.send(id);
  await EntryModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});

mongoose
    .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
    .then(() => console.log(`Database connected successfully`))
    .catch((err) => console.log(err));


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${port}...`);
});
