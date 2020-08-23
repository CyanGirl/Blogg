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
  const date = new Date(req.body.date);
  const author = req.body.author;
  const open = 0;
  const comment = [];

  //creating nw blog post in following schema
  const newBlog = new Blogs({
    title,
    article,
    date,
    author,
    open,
    comment,
  });

  //adding it to DB and save it
  newBlog
    .save()
    .then(() => {
      res.json("Blog Added!");
    })
    .catch((err) => res.status(400).json("Error!"));
});

//for updating a blog
router.post("/update/:id", (req, res) => {
  Blogs.findById(req.params.id)
    .then((post) => {
      post.title = req.body.title;
      post.article = req.body.article;
      post.date = new Date(req.body.date);
      post.author = req.body.author;
      post.open = Number(req.body.open);
      post.comment = req.body.comment;
      post
        .save()
        .then(() => res.json("Blog updated!"))
        .catch((err) => res.status(400).json("Error"));
    })

    .catch((err) => res.status(400).json("Error"));
});

//for deleting we only need th ID from the REQUEST URL
router.delete("/:id", (req, res) => {
  Blogs.findByIdAndDelete(req.params.id)
    .then((post) => res.json("Blog Deleted"))
    .catch((err) => res.status(400).json("Error"));
});

module.exports = router;
