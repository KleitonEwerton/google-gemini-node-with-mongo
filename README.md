# Google Gemini - Node and Mongo

## Sumário

- **Instalação**
- **Uso**
- **Funcionalidades**
- **Endpoints da API**
- **Desenvolvimento**
- **Autor**

## Instalação

Clone este repositório:

```bash
git clone https://github.com/KleitonEwerton/google-gemini-node-with-mongo.git

```

Instale as dependências:

```bash
cd google-gemini-node-with-mongo
npm install
```

Uso

```bash
npm run dev
```

# Funcionalidades

- Lista todos os posts existentes (GET /posts).

- Cria novos posts com upload de imagem (POST /posts).

- Gera descrições de imagens utilizando o Google Generative AI (PATCH /posts/:id).

- Integra com o Express.js para roteamento do lado do servidor.

- Utiliza o MongoDB para persistência de dados.
  Inclui tratamento de erros para uma experiência de usuário robusta.

# Endpoints da API

- GET /posts: Recupera uma lista de todos os posts.

- POST /posts: Cria um novo post com upload de imagem.
  Formato do corpo da requisição: { "descricao": "", "imgUrl": "", "alt": "" }

- POST /posts/upload: Envia uma imagem para um post.
  Dados de formulário multipart com um campo de arquivo de imagem.

- PATCH /posts/:id: Atualiza a descrição de um post com texto gerado com base na imagem enviada.
  Formato do corpo da requisição: { "alt": "" } (opcional)

# Desenvolvimento

O projeto foi desenvolvido utilizando Node.js e Express.js como base para o backend e integração com o MongoDB para persistência de dados. A estrutura modular do código facilita a manutenção e escalabilidade. Além disso, o Google Generative AI foi integrado para proporcionar descrições automáticas das imagens enviadas.

## Recursos utilizados no desenvolvimento:

### Linguagens e Frameworks:

- Node.js: Ambiente de execução JavaScript.

- Express.js: Framework para criação de APIs RESTful.
  Banco de Dados:

- MongoDB: Banco de dados NoSQL utilizado para armazenamento de posts.

### Inteligência Artificial

- Google Generative AI: Utilizado para análise de imagens e geração de descrições.

### Outras Ferramentas

- Multer: Para lidar com uploads de arquivos no Express.
- dotenv: Para gerenciamento de variáveis de ambiente.
- npm scripts: Automatização de tarefas como inicialização do servidor.

Como executar o ambiente de desenvolvimento:
Certifique-se de que o MongoDB esteja em execução localmente ou configure uma instância remota no arquivo .env.
Inicie o servidor com o comando

```
npm run dev
```

Use ferramentas como Postman ou cURL para testar os endpoints disponíveis.

# Autor

- Nome: Kleiton Ewerton de Oliveira
- Email: kleitonewertonoliveira@gmail.com
