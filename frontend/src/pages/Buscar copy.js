import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";

function Buscar() {
	const { query } = useParams(); // Captura o parâmetro de busca da URL
	const [keyword, setKeyword] = useState(query || ""); // Palavra-chave inicial
	const [results, setResults] = useState([]); // Resultados da busca
	const [error, setError] = useState(""); // Mensagem de erro

	// Função para realizar a busca
	const fetchPosts = async (searchQuery) => {
		try {
			const response = await axios.get(
				`http://localhost:5000/posts/search`, // Endpoint do backend
				{
					params: { qs: searchQuery }, // Parâmetro da palavra-chave
				}
			);
			setResults(response.data.posts); // Define os resultados no estado
		} catch (err) {
			setError("Procura não encontrada. Tente novamente.");
		}
	};

	// Executa a busca automaticamente quando o parâmetro "query" for alterado
	useEffect(() => {
		if (query) {
			fetchPosts(query);
		}
	}, [query]);

	// Função para realizar busca manual (ex.: ao clicar em botão)
	const handleSearch = () => {
		if (keyword.trim() !== "") {
			fetchPosts(keyword);
		}
	};

	return (
		<>
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
								Procurar Posts
							</h3>

							{/* Campo de Busca */}
							<div className="mb-3">
								<input
									type="text"
									placeholder="Digite uma palavra-chave..."
									className="form-control"
									value={keyword}
									onChange={(e) => setKeyword(e.target.value)} // Atualiza a palavra-chave
								/>
								<button
									className="btn btn-primary mt-2"
									onClick={handleSearch}>
									Buscar
								</button>
							</div>

							{/* Resultados */}
							{error && <p className="text-danger">{error}</p>}
							<ul className="list-group mt-4">
								{results.map((post) => (
									<li
										key={post.id}
										className="list-group-item">
										<h5>{post.title}</h5>
										<p>{post.content}</p>
										<p className="text-muted">
											Autor: {post.author} | Data:{" "}
											{post.timestamp}
										</p>
									</li>
								))}
							</ul>
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

export default Buscar;
