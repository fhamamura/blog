import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";

function Buscar() {
	const { termo } = useParams();
	const [results, setResults] = useState([]);
	const [error, setError] = useState("");

	// Função para realizar a busca
	const fetchPosts = async (searchTerm) => {
		try {
			const response = await axios.get(
				`http://localhost:5000/posts/search`,
				{
					params: { qs: searchTerm },
				}
			);
			setResults(response.data.posts);
		} catch (err) {
			setError("Erro ao buscar os posts. Tente novamente.");
		}
	};

	// Busca automática ao carregar o componente
	useEffect(() => {
		if (termo) {
			fetchPosts(termo);
		}
	}, [termo]);

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
								Resultados para "{termo}"
							</h3>

							{/* Resultados */}
							{error && <p className="text-danger">{error}</p>}
							{results.length > 0 ? (
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
							) : (
								<p className="mt-4">Nenhum post encontrado.</p>
							)}
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
