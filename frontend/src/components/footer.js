import React from "react";
import { useAuth } from "../context/AuthContext";

function Footer() {
	const { isAuthenticated } = useAuth(); // Verifica se o usuário está autenticado
	return (
		<>
			{/* Início Footer */}
			<footer className="py-3 my-4">
				<ul className="nav justify-content-center border-bottom pb-3 mb-3">
					<li className="nav-item">
						<a
							href="index.php"
							className="nav-link px-2 text-body-secondary">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a
							href="posts.php"
							className="nav-link px-2 text-body-secondary">
							Posts
						</a>
					</li>
					{isAuthenticated && (
						<li className="nav-item">
							<a
								href="/novo"
								className="nav-link px-2 text-body-secondary">
								Novo Post
							</a>
						</li>
					)}
				</ul>
				<p className="text-center text-body-secondary">&copy; 2024</p>
			</footer>
			{/* Fim Footer */}
		</>
	);
}

export default Footer;
