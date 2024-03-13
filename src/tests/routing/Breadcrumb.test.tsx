import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "bun:test";
import Breadcrumb from "../../components/routing/Breadcrumb";
import { MemoryRouter } from "react-router-dom";

function renderBreadcrumb(
	text: string,
	to?: string,
	currentSelection?: string,
) {
	render(
		<MemoryRouter>
			<Breadcrumb
				text={text}
				to={to}
				currentSelection={currentSelection}
				activeClasses=""
				inactiveClasses=""
			/>
		</MemoryRouter>,
	);
}

describe("Breadcrumb", () => {
	it("renders passed text", () => {
		renderBreadcrumb("test", "/");

		expect(screen.getByRole("link").textContent).toMatch(/test$/i);
	});

	it("links to passed route", () => {
		renderBreadcrumb("test", "/test_route");

		const breadcrumb = screen.getByRole("link");
		if (!(breadcrumb instanceof HTMLAnchorElement)) return false;
		expect(breadcrumb.href).toMatch(/test_route$/i);
	});

	it("shows current selection if present", () => {
		renderBreadcrumb("test", "/", "pizza");

		const currentSelectionExists = screen.queryByText(/pizza/);
		expect(currentSelectionExists).toBeTruthy();
	});

	it("only shows specified text when no current selection", () => {
		renderBreadcrumb("test", "/");

		const currentSelectionExists = screen.queryByRole("link", {
			name: "pizza",
		});
		expect(currentSelectionExists).toBe(null);
	});

	it("becomes heading if no 'to' prop passed", () => {
		renderBreadcrumb("test");

		expect(screen.queryByRole("heading", { name: "test" }));
	});
});
