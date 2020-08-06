const express = require("express");
const router = express.Router();

//importing the schema to work upon
const Blogs = require("../models/blogPage");

/////////////creation of APIs/////////////////

//for home we need all the blogs already there
router.route("/").get((req, res) => {
  Blogs.find()
    .then((blogs) => res.json(blogs))
    .catch((err) => res.status(400).json("Error!"));
});

//for adding of another blog
router.post("/new", (req, res) => {
  //retrieving the data from client
  const title = req.body.title;
  const article = req.body.article;
  const date = Date.parse(req.body.date);
  const author = req.body.author;

  //creating nw blog post in following schema
  const newBlog = new Blogs({
    title,
    article,
    date,
    author,
  });

  //adding it to DB and save it
  newBlog
    .save()
    .then(() => {
      res.json("Blog Added!");
    })
    .catch((err) => res.status(400).json("Error!"));
});

//for deleting we only need th ID from the REQUEST URL
router.delete("/:id", (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then((exercise) => res.json("Exercise Deleted"))
    .catch((err) => res.status(400).json("Error"));
});

module.exports = router;
