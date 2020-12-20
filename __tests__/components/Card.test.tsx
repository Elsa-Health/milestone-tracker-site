// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import Card from "../../components/Card";

describe("Card Component Renders Appopriately", () => {
	test("Renders the card component with text child", () => {
		render(<Card>Hello World!</Card>);

		expect(screen.getByText(/Hello World!/i)).toHaveTextContent(
			"Hello World!"
		);
	});

	test("Renders the card component with children components", () => {
		render(
			<Card>
				<button role="button" name="test-button">
					Here
				</button>
			</Card>
		);

		expect(screen.getByRole("button")).toHaveTextContent("Here");
	});
});
