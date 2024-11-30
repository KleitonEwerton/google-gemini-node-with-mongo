import "dotenv/config";
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getAll() {
  return await conexao
    .db("imersao-instabytes")
    .collection("posts")
    .find()
    .toArray();
}

export async function create(novoPost) {
  return conexao
    .db("imersao-instabytes")
    .collection("posts")
    .insertOne(novoPost);
}

export async function patch(id, novoPost) {
  const objectId = ObjectId.createFromHexString(id);
  return conexao
    .db("imersao-instabytes")
    .collection("posts")
    .updateOne({ _id: new ObjectId(objectId) }, { $set: novoPost });
}
