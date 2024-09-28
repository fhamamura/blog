const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/post.model.js");
const postRoute = require("./routes/post.route.js");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configuração Swagger
const swaggerOptions = {
	swaggerDefinition: {
		openapi: "3.0.0",
		info: {
			title: "Blog API",
			version: "1.0.0",
			description: "API para um blog simples",
		},
		servers: [
			{
				url: "http://localhost:3000",
			},
		],
	},
	apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Routes
app.use("/posts", postRoute);

//search post
/* app.get("/posts/search", async (req, res) => {
	try {
		const posts = await Post.find({
			$or: [
				{ title: { $regex: req.query.qs, $options: "i" } },
				{ content: { $regex: req.query.qs, $options: "i" } },
			],
		});
		res.status(200).json({ posts });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}); */

//get all posts
/* app.get("/posts", async (req, res) => {
	try {
		const posts = await Post.find();
		res.status(200).json({ posts });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}); */

//get post by id
/* app.get("/posts/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (!post) {
			return res
				.status(404)
				.json({ message: "Postagem não encontrada!" });
		}
		res.status(200).json({ post });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}); */

//insert post
/* app.post("/posts", async (req, res) => {
	try {
		const post = await Post.create(req.body);
		res.status(201).json({ post });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}); */

//update  post
/* app.put("/posts/:id", async (req, res) => {
	try {
		const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!post) {
			return res
				.status(404)
				.json({ message: "Postagem não encontrada!" });
		}
		res.status(200).json({ post });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}); */

//delete post
/* app.delete("/posts/:id", async (req, res) => {
	try {
		const post = await Post.findByIdAndDelete(req.params.id);
		if (!post) {
			return res
				.status(404)
				.json({ message: "Postagem não encontrada!" });
		}
		res.status(200).json({ message: "Postagem deletada com sucesso!" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}); */

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("Conectado ao banco de dados!");
		/* 		app.listen(process.env.PORT, () => {
			console.log("Server rodando na porta:", process.env.PORT);
		}); */
	})
	.catch((err) => {
		console.log("Erro ao conectar ao Banco de Dados: ", err);
	});

const server = app.listen(process.env.PORT, function () {
	console.log("Server rodando na porta:", process.env.PORT);
});
module.exports = server;
