import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";
import { useAuth } from "../context/AuthContext";

const Logout = () => {
	const navigate = useNavigate();
	const { setIsAuthenticated } = useAuth();

	useEffect(() => {
		// Limpar token e redefinir estado de autenticação
		logout();
		setIsAuthenticated(false);

		// Redirecionar para a página de login
		navigate("/login");
	}, [navigate, setIsAuthenticated]);

	return (
		<div style={{ textAlign: "center", marginTop: "50px" }}>
			<h2>Saindo...</h2>
		</div>
	);
};

export default Logout;
