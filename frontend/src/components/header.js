import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchDisplay({ _isDisplay }) {
	const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o termo de busca
	const navigate = useNavigate(); // Hook para navegação

	// Função para lidar com o envio do formulário
	const handleSearch = (event) => {
		event.preventDefault(); // Evita o reload da página
		if (searchTerm.trim() !== "") {
			navigate(`/buscar/${searchTerm}`); // Redireciona para a página com o termo
		}
	};

	if (!_isDisplay) {
		return null;
	}
	return (
		<>
			{/* Início SearchDisplay */}
			<form
				className="col-12 col-lg-auto mb-3 mb-lg-0"
				role="search"
				onSubmit={handleSearch}>
				<input
					type="search"
					className="form-control"
					placeholder="Procurar..."
					aria-label="Procurar"
					value={searchTerm} // Controla o valor do input
					onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado
				/>
			</form>
			{/* Fim SearchDisplay */}
		</>
	);
}

function Header({ isDisplay = true }) {
	return (
		<>
			{/* Início Header */}
			<header className="py-3 mb-4 border-bottom">
				<div className="container d-flex flex-wrap justify-content-center">
					<a
						href="/"
						className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
						<svg className="bi me-2" width="40" height="32">
							<a href="#" />
						</svg>
						<span className="fs-4">Hama Blog</span>
					</a>

					<SearchDisplay _isDisplay={isDisplay} />
				</div>
			</header>
			{/* Fim Header */}
		</>
	);
}

export default Header;
