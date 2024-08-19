const express = require("express");
const dotenv = require("dotenv");
const dbConection = require("./config/connexionDataBase");
const bookPath = require("./router/BookRouter");
const cors = require("cors");

const app = express();
dotenv.config();
dbConection();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/book", bookPath);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
