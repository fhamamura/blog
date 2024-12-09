import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { saveToken } from "../utils/auth";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useAuth } from "../context/AuthContext";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [secret] = useState("");
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const { setIsAuthenticated } = useAuth(); // Atualiza o contexto global

	const handleLogin = async (e) => {
		e.preventDefault();
		setError(null); // Clear previous errors
		//const SECRET = process.env.JWT_SECRET;

		try {
			const response = await axios.post("http://localhost:5000/login", {
				email,
				password,
				secret,
			});

			const { token } = response.data;

			setIsAuthenticated(true);

			// Save the token and redirect to dashboard
			saveToken(token);
			navigate("/posts");
		} catch (err) {
			setError("Email ou senha inválida!.");
		}
	};

	return (
		<div className="container">
			{/* Start Nav */}
			<Nav />
			{/* End Nav */}

			{/* Start Header */}
			<Header isDisplay={false} />
			{/* End Header */}

			<main className="container">
				<div className="row g-5">
					<div className="col-md-12">
						<form className="" onSubmit={handleLogin}>
							<div className="form-floating mb-3">
								<input
									type="email"
									className="form-control rounded-3"
									id="floatingEmail"
									placeholder="name@example.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
								<label for="floatingEmail">Email</label>
							</div>
							<div className="form-floating mb-3">
								<input
									type="password"
									className="form-control rounded-3"
									id="floatingSenha"
									placeholder="Senha"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
									required
								/>
								<label for="floatingSenha">Senha</label>
							</div>
							{error && <p style={{ color: "red" }}>{error}</p>}
							<button
								className="w-100 mb-2 btn btn-lg rounded-3 btn-secondary"
								type="submit">
								Login
							</button>
							<hr className="my-4" />
						</form>
					</div>
				</div>
			</main>

			{/* Start Footer */}
			<Footer />
			{/* End Footer */}
		</div>
	);
};

export default Login;
