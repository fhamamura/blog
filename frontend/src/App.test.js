import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// Mock dos componentes de página para simplificar os testes
jest.mock("/Posts", () => jest.fn(() => <div>Posts Page</div>));
jest.mock("/Login", () => jest.fn(() => <div>Login Page</div>));

describe("App Routing", () => {
	it('deve renderizar a página de Posts ao acessar "/"', () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<App />
			</MemoryRouter>
		);

		expect(screen.getByText("Posts Page")).toBeInTheDocument();
	});

	it('deve renderizar a página de Login ao acessar "/login"', () => {
		render(
			<MemoryRouter initialEntries={["/login"]}>
				<App />
			</MemoryRouter>
		);

		expect(screen.getByText("Login Page")).toBeInTheDocument();
	});

	it("deve redirecionar para a página de Login ao acessar uma rota desconhecida", () => {
		render(
			<MemoryRouter initialEntries={["/rota-desconhecida"]}>
				<App />
			</MemoryRouter>
		);

		expect(screen.getByText("Login Page")).toBeInTheDocument();
	});
});
