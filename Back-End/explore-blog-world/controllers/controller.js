import Blog from "../models/blogs.js";

export const create_get = async (req, res) => {
  res.render("create");
};

export const create_post = async (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => res.redirect("/blogs"))
    .catch((err) => console.log(err));
};

export const blog_index = async (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => res.render("blogs", { blogs: result }))
    .catch((err) => console.log(err));
};
export const blog_details = async (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result });
    })
    .catch((err) => console.log(err));
};

export const blog_put = async (req, res) => {
  const id = req.params.id;
  const { autorius, title, text } = req.body;
  Blog.findByIdAndUpdate(id, { autorius, title, text }, { new: true })
    .then((blog) => {
      res.status(200).json({ message: "Blog updated successfully", blog });
    })
    .catch((err) => {
      console.error("Error during update:", err);
      res
        .status(500)
        .json({ error: "An error occurred while updating the blog" });
    });
};

export const blog_delete = async (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => res.json({ redirect: "/blogs" }))
    .catch((err) => console.log(err));
};
