const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));


const wordList = [];

app.get("/hello", (req, res) => {
    const response = {
      msg: "Hello world"
    };
    
    res.send(response);
  });


 app.get("/echo/:id", (req, res) => {
    const para = req.params.id;
    const response = {
        id: para
    }
    res.send(response);
}
 );


 app.post("/sum", (req, res) => {
    const numbers = req.body.numbers;

    const sum = numbers.reduce((acc, num) =>
    acc + num, 0);
    const response = {
        sum: sum
    };
    
    res.send(response);
   
    
  });

  

app.post("/list", (req, res) => {
  const text = req.body.text;
  wordList.push(text);
  const response = { list: wordList };
  res.json(response);
  console.log(response);
});




 app.listen(port, () =>
   console.log("Server is running")
)