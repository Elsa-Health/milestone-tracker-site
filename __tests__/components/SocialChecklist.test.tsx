// import dependencies
import React from "react";

// import react-testing methods
import { fireEvent, render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import SocialChecklist from "../../components/SocialChecklist";
import Button from "../../components/Button";
import { getUpdateTrackerValue } from "../../common/utils";

describe ("Checking the SocialChecklist", () => {
    test("Renders checklist", () => {
        const goBack = jest.fn();
        const onNext = jest.fn();
        const exitTracker = jest.fn()
        const updateTrackerValue = jest.fn();
        render(<SocialChecklist age={0} goBack={goBack} onNext={onNext} exitTracker={exitTracker} tracker={[]} updateTrackerValue={updateTrackerValue}/>)
    
        expect(screen.getByTestId("SocialChecklist")).toBeInTheDocument();
    });

    test("Checking the onChange function", () =>{

        const onChange = jest.fn();
        const updateTrackerValue = jest.fn();
        expect(onChange(updateTrackerValue)).toBeUndefined;
    })

    test("Renders the Next button", () => {
       
        render(<Button text="Next" onClick={() => {}} />);

		expect(screen.getByText("Next")).toHaveTextContent(/next/i);
    })

    test("Renders the Back button", () => {
       
        render(<Button text="Back" onClick={() => {}} />);

		expect(screen.getByText("Back")).toHaveTextContent(/back/i);
    })

    test("Renders the Exit button", () => {
       
        render(<Button text="Exit" onClick={() => {}} />);

		expect(screen.getByText("Exit")).toHaveTextContent(/exit/i);
    })

    test("Check if Button Next Function gets Triggered", () => {
		const onNext = jest.fn();
		render(<Button text="Next" onClick={onNext} />);

		const button = screen.getByTestId("button");

		fireEvent.click(button);

		expect(onNext).toBeCalled();
	});

})

