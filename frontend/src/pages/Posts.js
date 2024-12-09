import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useAuth } from "../context/AuthContext";

import React, { useState, useEffect } from "react";
import axios from "axios";

function Posts() {
	const [posts, setPosts] = useState([]);
	const { isAuthenticated } = useAuth(); // Verifica se o usuário está autenticado

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await axios.get("http://localhost:5000/posts");
			//console.log(response.data.posts);
			setPosts(response.data.posts);
		};
		fetchPosts();
	}, []);

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
							{posts.map((post) => (
								<div key={post._id}>
									<hr />
									<a
										href={`/post/${post._id}`}
										className="link-dark">
										<h3 className="pb-4 mb-4 fst-italic border-bottom">
											{post.title}
										</h3>
										<article class="blog-post">
											{post.content.substring(0, 200)}
											<p className="blog-post-meta fst-italic">
												Autor: {post.author} em{" "}
												{post.timestamp}
											</p>
										</article>
										<div class="d-flex justify-content-center">
											{isAuthenticated && (
												<form
													action={`/editar/${post._id}`}>
													<button
														type="submit"
														className="btn btn-secondary">
														Editar
													</button>
												</form>
											)}
										</div>

										<div class="d-flex justify-content-center">
											{isAuthenticated && (
												<form
													action={`/apagar/${post._id}`}>
													<button
														type="submit"
														className="btn btn-secondary mt-2">
														Apagar
													</button>
												</form>
											)}
										</div>
									</a>
								</div>
							))}
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
