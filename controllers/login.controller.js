const Login = require("../models/login.model.js");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
	try {
		if (
			req.body.email === process.env.USUARIO_TESTE &&
			req.body.password === process.env.SENHA_TESTE
		) {
			const id = 1;
			const token = jwt.sign({ id }, process.env.JWT_SECRET, {
				expiresIn: 3000,
			});
			return res.status(200).json({ auth: true, token: token });
		} else {
			res.status(401).json({ message: "Usuário ou senha inválidos" });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = { login };
