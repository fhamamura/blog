import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { getToken } from "../utils/auth";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Editar = () => {
	const { id } = useParams(); // Obtendo o ID do post da URL
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [author, setAuthor] = useState("");
	const [message, setMessage] = useState("");
	const token = getToken();

	// Função para carregar os dados do post
	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await axios.get(
					`http://localhost:5000/posts/${id}`
				);
				setTitle(response.data.post.title);
				setContent(response.data.post.content);
				setAuthor(response.data.post.author);
				//console.log(response.data);
			} catch (error) {
				setMessage("Erro ao carregar o post para edição.");
			}
		};

		fetchPost();
	}, [id]);

	// Função para lidar com o envio do formulário
	const handleSubmit = async (e) => {
		e.preventDefault();

		const postData = { title, content, author };
		//const token = getToken();
		//const token = localStorage.getItem("jwtToken"); // Obtendo o JWT

		//console.log(token);

		if (!token) {
			setMessage("Você precisa estar logado para editar um post.");
			return;
		}

		try {
			//console.log(postData);
			const response = await axios.put(
				`http://localhost:5000/posts/${id}`, // URL para editar o post
				postData,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`, // Enviando o JWT no cabeçalho
					},
				}
			);

			//console.log(response.data);

			if (response.status === 200) {
				setMessage("Post atualizado com sucesso!");
				navigate(`/post/${id}`);
			}
		} catch (error) {
			//console.log(error);
			if (error.response) {
				setMessage(error.response.data.message);
			} else {
				setMessage("Erro ao atualizar o post. Tente novamente.");
			}
		}
	};

	return (
		<>
			{!token && <Navigate to="/login" />}
			<div className="container">
				{/* Start Nav */}
				<Nav />
				{/* End Nav */}

				{/* Start Header */}
				<Header />
				{/* End Header */}

				<main className="container">
					<div className="container">
						<h1 className="my-4">Editar Post</h1>
						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label
									htmlFor="formTitle"
									className="form-label">
									Título
								</label>
								<input
									type="text"
									className="form-control"
									id="formTitle"
									placeholder="Digite o título do post"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									required
								/>
							</div>

							<div className="mb-3">
								<label
									htmlFor="formContent"
									className="form-label">
									Conteúdo
								</label>
								<textarea
									className="form-control"
									id="formContent"
									rows="5"
									placeholder="Escreva o conteúdo do post"
									value={content}
									onChange={(e) => setContent(e.target.value)}
									required
								/>
							</div>

							<div className="mb-3">
								<label
									htmlFor="formAuthor"
									className="form-label">
									Autor
								</label>
								<input
									type="text"
									className="form-control"
									id="formAuthor"
									placeholder="Digite o nome do autor"
									value={author}
									onChange={(e) => setAuthor(e.target.value)}
									required
								/>
							</div>

							<button type="submit" className="btn btn-secondary">
								Atualizar
							</button>
						</form>

						{message && (
							<div className="mt-4 alert alert-info">
								{message}
							</div>
						)}
					</div>
				</main>

				{/* Start Footer */}
				<Footer />
				{/* End Footer */}
			</div>
		</>
	);
};

export default Editar;
