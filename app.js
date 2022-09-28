const express = require("express");
const app = express();
app.use(express.json());
var movies = [
  {
    name: "Mission impossible",
    id: 1,
    genre: "action",
  },
];

app.get("/", (req, res) => {
  res.send(movies);
});
app.post("/", (req, res) => {
  const movie = {
    name: req.body.name,
    genre: req.body.genre,
    id: movies.length + 1,
  };
  movies.push(movie);
  res.send(movie);
  console.log(movies);
});
app.get("/:id", (req, res) => {
  const movie = movies.find((movie) => movie.id === parseInt(req.params.id));

  if (!movie) return res.status(404).send("Movie doesn't exist!");
  res.send(movie);
});
app.put("/:id",(req,res)=>{
  const movie = movies.find((movie) => movie.id === parseInt(req.params.id));
  movie.name = req.body.name;
  res.send(movie);
})
app.delete("/:id",(req,res)=>{
   movies.filter((movie) => movie.id !== parseInt(req.params.id));
  res.send(movies);
})


const port = process.env.port || 3000;
app.listen(port, () => console.log(`app is running on ${port}`));
