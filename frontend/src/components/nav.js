import React from "react";
import { useAuth } from "../context/AuthContext";

function Nav() {
	const { isAuthenticated } = useAuth(); // Verifica se o usuário está autenticado
	return (
		<>
			{/* Início Navegação */}
			<nav className="py-2 bg-body-tertiary border-bottom">
				<div className="container d-flex flex-wrap">
					<ul className="nav me-auto">
						<li className="nav-item">
							<a
								href="/"
								className="nav-link link-body-emphasis px-2 active"
								aria-current="page">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a
								href="/posts"
								className="nav-link link-body-emphasis px-2">
								Posts
							</a>
						</li>
						{isAuthenticated && (
							<li className="nav-item">
								<a
									href="/novo"
									className="nav-link link-body-emphasis px-2">
									Novo Post
								</a>
							</li>
						)}
					</ul>
					<ul className="nav">
						{!isAuthenticated && (
							<li className="nav-item">
								<a
									href="/login"
									className="nav-link link-body-emphasis px-2">
									Login
								</a>
							</li>
						)}
						{isAuthenticated && (
							<li className="nav-item">
								<a
									href="/logout"
									className="nav-link link-body-emphasis px-2">
									Logout
								</a>
							</li>
						)}
					</ul>
				</div>
			</nav>
			{/* Fim Navegação */}
		</>
	);
}

export default Nav;
