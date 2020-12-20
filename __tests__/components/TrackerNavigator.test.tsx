// import dependencies
import React from "react";

// import react-testing methods
import { fireEvent, render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import TrackerNavigator from "../../components/TrackerNavigator";

describe("Tracker Navigator Renders Appopriately", () => {
	test("Renders the navigator component and fires functions", () => {
		const onBack = jest.fn();
		const onCancel = jest.fn();
		render(<TrackerNavigator onBack={onBack} onCancel={onCancel} />);

		const nav = screen.getByTestId("TrackerNavigator");
		expect(nav).toBeInTheDocument();

		const back = screen.getByTestId("TrackerNavigatorBackBtn");
		const cancel = screen.getByTestId("TrackerNavigatorCancelBtn");

		fireEvent.click(back);
		expect(onBack).toHaveBeenCalled();

		fireEvent.click(cancel);
		expect(onCancel).toHaveBeenCalled();
	});
});
