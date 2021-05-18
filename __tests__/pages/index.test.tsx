// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import IndexPage from "../../pages/index";
import DevelopmentTracker from "../../pages/index"

test("The Index page renders", () => {
	render(<IndexPage />);

	expect(screen.getByTestId("IndexPage")).toBeInTheDocument();
});

 test("Testing for Development Tracker", ()=>{

	expect(DevelopmentTracker()).toBeDefined;

})