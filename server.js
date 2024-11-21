import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Test photo",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "The Cat in the Hat",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 3,
    descricao: "Cat make movies and TV shows",
    imagem: "https://placecats.com/millie/300/150",
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server listening on port 3000...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});
