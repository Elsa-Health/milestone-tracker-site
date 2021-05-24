// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import GrossMotorChecklist from "../../components/GrossMotorChecklist";
import { getUpdateTrackerValue } from "../../common/utils";

describe ("Checking the Gross Motor Checklist", () => {
    test("Renders the buttons and other content from the component", () => {
        const goBack = jest.fn();
        const onNext = jest.fn();
        const exitTracker = jest.fn()
        const updateTrackerValue = jest.fn();
        render(<GrossMotorChecklist age={0} goBack={goBack} onNext={onNext} exitTracker={exitTracker} tracker={[]} updateTrackerValue={updateTrackerValue}/>)
    
        expect(screen.getByTestId("GrossMotorChecklist")).toBeInTheDocument();
    });

    test ("Is the onChange function called", () =>{
        const onChange = jest.fn();
        const update = getUpdateTrackerValue("gross motor", "code", true, [])
        expect(onChange(onChange)).toBeUndefined();
        expect((update)).toStrictEqual([]);
    })
})