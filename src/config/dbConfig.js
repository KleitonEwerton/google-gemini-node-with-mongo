import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConexao) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(stringConexao);
    console.log("Connecting to cluster...");
    await mongoClient.connect();
    console.log("Connected to cluster! Success!");

    return mongoClient;
  } catch (erro) {
    console.error("Error to connect to cluster", erro);
    process.exit();
  }
}
