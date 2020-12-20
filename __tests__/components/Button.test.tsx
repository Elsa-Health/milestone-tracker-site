// import dependencies
import React from "react";

// import react-testing methods
import { fireEvent, render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import Button from "../../components/Button";

describe("Button Component", () => {
	test("Renders the button", () => {
		render(<Button text="Submit" onClick={() => {}} />);

		expect(screen.getByTestId("button")).toHaveTextContent(/submit/i);
	});

	test("Button click function gets triggered", () => {
		const callBack = jest.fn();
		render(<Button text="Submit" onClick={callBack} />);

		const button = screen.getByTestId("button");

		fireEvent.click(button);

		expect(callBack).toHaveBeenCalled();
	});
});
