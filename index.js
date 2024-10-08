const express = require("express");
const dotenv = require("dotenv");
const dbConection = require("./config/connexionDataBase");
const bookPath = require("./router/BookRouter");
const cors = require("cors");
const path = require("path");
const app = express();
dotenv.config();
dbConection();

const checkReferer = (req, res, next) => {
  const referer = req.get("Referer");
  
  if (referer && referer.startsWith("https://bilal-ez-zaim.github.io")) {
    next(); 
  } else {
    res.status(403).json({ message: "Forbidden" }); 
  }
};


app.use("/api", checkReferer);

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(
  cors({
    origin: "https://bilal-ez-zaim.github.io",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use("/api/book", bookPath);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
