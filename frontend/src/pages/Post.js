import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useAuth } from "../context/AuthContext";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Posts() {
	const [post, setPosts] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await axios.get(
				`http://localhost:5000/posts/${id}`
			);
			//console.log(response.data.post);
			setPosts(response.data.post);
		};
		fetchPosts();
	}, [id]);

	const { isAuthenticated } = useAuth(); // Verifica se o usuário está autenticado

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
							{post && (
								<>
									<h3 className="pb-4 mb-4 fst-italic border-bottom">
										{post.title}
									</h3>
									<article class="blog-post">
										{post.content}
										<p className="blog-post-meta fst-italic">
											Autor: {post.author} em{" "}
											{post.timestamp}
										</p>
									</article>
									{isAuthenticated && (
										<form action={`/editar/${post._id}`}>
											<button
												type="submit"
												className="btn btn-secondary">
												Editar
											</button>
										</form>
									)}

									{isAuthenticated && (
										<form action={`/apagar/${post._id}`}>
											<button
												type="submit"
												className="btn btn-secondary mt-2">
												Apagar
											</button>
										</form>
									)}
								</>
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

export default Posts;
