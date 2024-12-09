import React, { createContext, useContext, useState, useEffect } from "react";
import { getToken, logout } from "../utils/auth";

// Criar o contexto de autenticação
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	// Verificar automaticamente se o usuário está logado
	useEffect(() => {
		const token = getToken();
		setIsAuthenticated(!!token); // Se o token existe, o usuário está logado
		//console.log("Token carregado:", token); // Debug
		//console.log("isAuthenticated no useEffect:", !!token); // Debug
	}, []);

	//console.log("AuthProvider: isAuthenticated", isAuthenticated);

	const handleLogout = () => {
		logout();
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, setIsAuthenticated, handleLogout }}>
			{children}
		</AuthContext.Provider>
	);
};

// Hook personalizado para usar o contexto
export const useAuth = () => useContext(AuthContext);
