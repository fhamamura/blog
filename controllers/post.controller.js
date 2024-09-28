const Post = require("../models/post.model.js");

const searchPosts = async (req, res) => {
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
};

const getPosts = async (req, res) => {
	try {
		const posts = await Post.find();
		res.status(200).json({ posts });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getPost = async (req, res) => {
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
};

const createPost = async (req, res) => {
	try {
		const post = await Post.create(req.body);
		res.status(201).json({ post });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const updatePost = async (req, res) => {
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
};

const deletePost = async (req, res) => {
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
};

module.exports = {
	searchPosts,
	getPosts,
	getPost,
	createPost,
	updatePost,
	deletePost,
};
