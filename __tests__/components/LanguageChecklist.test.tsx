// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import LanguageChecklist from "../../components/LanguageChecklist";

describe ("Checking the Language Checklist", () => {
    test("Renders the buttons and other content from the component", () => {
        const goBack = jest.fn();
        const onNext = jest.fn();
        const exitTracker = jest.fn()
        const updateTrackerValue = jest.fn();
        render(<LanguageChecklist age={0} goBack={goBack} onNext={onNext} exitTracker={exitTracker} tracker={[]} updateTrackerValue={updateTrackerValue}/>)
    
        expect(screen.getByTestId("LanguageChecklist")).toBeInTheDocument();
    });
})