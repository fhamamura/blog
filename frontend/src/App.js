import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Novo from "./pages/Novo";
import Editar from "./pages/Editar";
import Apagar from "./pages/Apagar";
import Buscar from "./pages/Buscar";
import { AuthProvider, useAuth } from "./context/AuthContext";

function App() {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Posts />} />
					<Route path="/posts" element={<Posts />} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="/login" element={<Login />} />
					<Route path="/logout" element={<Logout />} />
					<Route path="/novo" element={<Novo />} />
					<Route path="/editar/:id" element={<Editar />} />
					<Route path="/apagar/:id" element={<Apagar />} />
					<Route path="/buscar" element={<Buscar />} />
					<Route path="/buscar/:termo" element={<Buscar />} />
					<Route path="*" element={<Navigate to="/login" />} />
				</Routes>
			</Router>
		</AuthProvider>
	);
}

export default App;
