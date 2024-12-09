import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useAuth } from "../context/AuthContext";
import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import { getToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Apagar() {
	const { isAuthenticated } = useAuth(); // Verifica se o usuário está autenticado
	const { id } = useParams(); // Obtendo o ID do post da URL
	const [post, setPost] = useState({});
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const token = getToken();

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await axios.get(
					`http://localhost:5000/posts/${id}`
				);
				setPost(response.data.post);
			} catch (error) {
				setError("Erro ao carregar o post.");
			}
		};

		fetchPost();
	}, [id]);

	const handleDelete = async () => {
		const token = getToken();

		if (!token) {
			setMessage("Você precisa estar logado para apagar um post.");
			return;
		}

		//apagar o post
		try {
			await axios.delete(`http://localhost:5000/posts/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			navigate("/posts");
		} catch (error) {
			setError("Erro ao apagar o post.");
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
					<div className="row g-5">
						<div className="col-md-12">
							<h3 className="pb-4 mb-4 fst-italic border-bottom">
								{post.title}
							</h3>
							<article class="blog-post">
								{post.content}
								<p className="blog-post-meta fst-italic">
									Autor: {post.author} em {post.timestamp}
								</p>
							</article>
							{isAuthenticated && (
								<form onSubmit={handleDelete}>
									<button
										type="button"
										onClick={handleDelete}
										className="btn btn-danger">
										Apagar
									</button>
								</form>
							)}
							{message && <p>{message}</p>}
							{error && <p>{error}</p>}
						</div>
					</div>
				</main>

				{/* Start Footer */}
				<Footer />
				{/* End Footer */}
			</div>
		</>
	);
}

export default Apagar;
