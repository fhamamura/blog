const express = require("express");
const router = express.Router();
const { login } = require("../controllers/login.controller.js");
/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       required:
 *         - user
 *         - password
 *         - secret
 *       properties:
 *         id:
 *           type: string
 *           description: O ID gerado automaticamente.
 *         user:
 *           type: string
 *           description: Usuário de login.
 *         password:
 *           type: string
 *           description: Senha de login.
 *         secret:
 *           type: string
 *           description: Chave secreta para autenticação.
 *       example:
 *         user: "meusuario@meuusuario.com"
 *         password: "minhasenha."
 *         secret: "minhachave"
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza login
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Login realizado com sucesso.
 *       401:
 *         description: Usuário ou senha inválidos.
 *       500:
 *         description: Erro no servidor.
 *
 */

router.post("/", login);

module.exports = router;
