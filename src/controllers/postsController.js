import fs from "fs";
import { getAll, create, patch } from "../models/postsModel.js";
import generateDescription from "../services/geminiService.js";

export async function getAllPost(req, res) {
  const posts = await getAll();
  res.status(200).json(posts);
}

export async function createPost(req, res) {
  try {
    const postCriado = await create(req.body);
    res.status(200).json(postCriado);
  } catch (erro) {
    console.log(erro.message);
    res.status(500).json({ Erro: "Error!" });
  }
}

export async function uploadImagem(req, res) {
  const novoPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: "",
  };

  try {
    const postCriado = await patchPost(novoPost);
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
    fs.renameSync(req.file.path, imagemAtualizada);
    res.status(200).json(postCriado);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ Erro: "Error!" });
  }
}

export async function patchNewPost(req, res) {
  const id = req.params.id;

  const urlImagem = `http://localhost:3000/${id}.png`;

  try {
    const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
    const descricao = await generateDescription(imgBuffer);

    const post = {
      imgUrl: urlImagem,
      descricao: descricao,
      alt: req.body.alt,
    };

    const postCriado = await patch(id, post);
    res.status(200).json(postCriado);
  } catch (erro) {
    console.log(erro.message);
    res.status(500).json({ Erro: "Error!" });
  }
}
