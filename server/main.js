const express = require("express"); // npm install express --save
const app = express();

app.use("/scripts", express.static(__dirname + "/scripts"));

app.listen(3000, () => {
  console.log("서버 실행 http://localhost:3000/");
});

// req 클라이언트에서 서버
// res 서버에서 클라이언트
app.get("/", (req, res) => {
  console.log("메인 페이지 접속");
  // res.send("메인 페이지 접속 요청");
  res.sendFile(__dirname + "/pages/index.html");
});

app.get("/about", (req, res) => {
  console.log("about 페이지 접속");
  // res.send("about 페이지 접속 요청");
  res.sendFile(__dirname + "/pages/about.html");
});

app.get("/script", (req, res) => {
  console.log("script 페이지 접속");
  // res.send("script 페이지 접속 요청");
  res.sendFile(__dirname + "/pages/script.html");
});
