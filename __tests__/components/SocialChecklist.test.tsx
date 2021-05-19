// import dependencies
import React from "react";

// import react-testing methods
import { fireEvent, render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import SocialChecklist from "../../components/SocialChecklist";
//import Button from "../../components/Button";

describe ("Checking the SocialChecklist", () => {
    test("Renders the buttons and other content from the component", () => {
        const goBack = jest.fn();
        const onNext = jest.fn();
        const exitTracker = jest.fn()
        const updateTrackerValue = jest.fn();
        render(<SocialChecklist age={0} goBack={goBack} onNext={onNext} exitTracker={exitTracker} tracker={[]} updateTrackerValue={updateTrackerValue}/>)
    
        expect(screen.getByTestId("SocialChecklist")).toBeInTheDocument();
    });

    // test("Check if Button Next Function gets Triggered", () => {
	// 	const onNext = jest.fn();
	// 	render(<Button text="Next" onClick={onNext} />);

	// 	const button = screen.getByTestId("button");

	// 	fireEvent.click(button);

	// 	expect(onNext).toBeCalled();
	// });

})