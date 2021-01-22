const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/home/index.html"));
});

app.get("/ask", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/ask/index.html"));
});

app.post("/create-question", (req, res) => {
  let data = [];
  try {
    data = JSON.parse(fs.readFileSync("data.json"));
  } catch (err) {
    data = [];
  }

  const newQuestion = {
    _id: data.length + 1,
    content: req.body.content,
    yes: 0,
    no: 0,
  };
  let checkDuplicate = data.filter((question) => {
    return question.content === newQuestion.content;
  });
  let success = checkDuplicate.length === 0;
  if (success) {
    const newData = [...data, newQuestion];
    fs.writeFileSync("data.json", JSON.stringify(newData));
  }
  res.send({
    success: success,
  });
});

app.get('/get-question', (req, res) => {
  let data = [];
  try {
    data = JSON.parse(fs.readFileSync("data.json"));
  } catch (err) {
    data = [];
  }
  
  const index = Math.floor(Math.random() * data.length);
  const question = data[index];
  res.send({
    success: 1,
    data: question,
  })
});

app.post('/update-vote', (req, res) => {
  let data = [];
  try {
    data = JSON.parse(fs.readFileSync("data.json"));
  } catch (err) {
    data = [];
  }
  const index = req.body._id - 1;
  data[index][`${req.body.type}`] = data[index][`${req.body.type}`] + 1;
  fs.writeFileSync("data.json", JSON.stringify(data));
  res.send({
    success: 1,
    data: data[index],
  })
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/404/index.html"));
});

app.listen(8080, (err) => {
  if (err) throw err;
  console.log("Server started");
});
