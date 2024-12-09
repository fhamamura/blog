import { useNavigate, Navigate } from "react-router-dom";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import React, { useState } from "react";
import axios from "axios";
import { getToken } from "../utils/auth";

function Novo() {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [author, setAuthor] = useState("");
	const [message, setMessage] = useState("");
	const token = getToken();

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Criação do objeto com os dados do post
		const postData = {
			title,
			content,
			author,
		};

		if (!token) {
			setMessage("Você precisa estar logado para criar um post.");
			return;
		}

		try {
			// Enviando os dados para a API Node.js usando axios
			const response = await axios.post(
				"http://localhost:5000/posts",
				postData,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);

			const id = response.data.post._id;

			if (response.status === 201) {
				setMessage("Post criado com sucesso!");
				navigate(`/post/${id}`); // Redireciona para a página do post criado
			}

			// Exibindo a mensagem da resposta da API
			setMessage(response.data.message);

			// Limpar os campos após o envio
			setTitle("");
			setContent("");
			setAuthor("");
		} catch (error) {
			// Em caso de erro, exibimos a mensagem
			if (error.response) {
				// O servidor respondeu com um código de status fora da faixa 2xx
				setMessage(error.response.data.message);
			} else {
				// Se não recebeu resposta, algo deu errado com a requisição
				setMessage(
					"Erro ao enviar o post. Tente novamente mais tarde."
				);
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

				{/* Start Main */}
				<main>
					<div className="container">
						<h1 className="my-4">Criar Novo Post</h1>
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
								Publicar
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
}

export default Novo;
